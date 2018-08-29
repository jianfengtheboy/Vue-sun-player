<template>
    <!--正在播放-->
    <div class="playList">
        <MusicList :list="playlist" :listType="1" @select="selectItem" @del="deleteItem">
            <div class="list-btn" slot="listBtn">
                <span @click="$refs.dialog.show()">清空列表</span>
            </div>
        </MusicList>
        <SunDialog ref="dialog" @confirm="clearList" bodyText="是否清空正在播放列表" confirmBtnText="清空"></SunDialog>
    </div>
</template>

<script>
import { mapGetters, mapMutations, mapActions } from 'vuex'
import MusicList from '../../components/MusicList/MusicList'
import SunDialog from '../../base/SunDialog/SunDialog'

export default {
    name: "play-list",
    data: () => ({
        show : false
    }),
    components: {
        MusicList,
        SunDialog
    },
    computed : {
        ...mapGetters([
            'playing',
            'playlist',
            'currentMusic',
            'audioEle'
        ])
    },
    methods: {
        //清空事件列表
        clearList () {
            this.clearPlayList()
            this.$sunToast('列表清空成功')
        },
        //播放暂停事件
        selectItem (item, index) {
            if(item.id === this.currentMusic.id && !this.playing) {
                this.setPlaying(true)
            }else{
                this.setCurrentIndex(index)
                this.setPlaying(true)
            }
        },
        //删除事件
        deleteItem (index) {
            let list = [...this.playlist]
            list.splice(index, 1)
            this.removerPlayListItem({list, index})
            this.$sunToast('删除成功')
        },
        ...mapMutations({
            setPlaying: 'SET_PLAYING',
            setCurrentIndex: 'SET_CURRENTINDEX',
            clearPlaylist: 'CLEAR_PLAYLIST'
        }),
        ...mapActions([
            'removerPlayListItem',
            'clearPlayList'
        ])
    }
}
</script>

<style lang="scss">
@import "~assets/css/base";

.playList {
    position: relative;
    width: 100%;
    height: 100%;
    .musicList {
        width: 100%;
        height: 100%;
        .list-btn {
            display: flex;
            justify-content: center;
            align-items: center;
            height: 50px;
            span {
                padding: 5px 20px;
                cursor: pointer;
                user-select: none;
                &:hover {
                    color: $text_color_active;
                }
            }
        }
    }
}
</style>
