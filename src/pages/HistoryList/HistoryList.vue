<template>
    <!--我听过的（播放历史）-->
    <div class="historyList">
        <MusicList :list="historyList" :listType="1" @select="selectItem" @del="deleteItem">
            <div class="list-btn" slot="listBtn">
                <span @click="$refs.dialog.show()">清空列表</span>
            </div>
        </MusicList>
        <SunDialog ref="dialog" @confirm="clearList" bodyText="是否清空播放历史列表" confirmBtnText="清空"></SunDialog>
    </div>
</template>

<script>
import { topListSun } from '../../api/index'
import { mapGetters, mapMutations, mapActions } from 'vuex'
import MusicList from '../../components/MusicList/MusicList'
import SunDialog from '../../base/SunDialog/SunDialog'

export default {
    name: "history-list",
    components: {
        MusicList,
        SunDialog
    },
    computed : {
        ...mapGetters([
            'historyList',
            'playing',
            'currentMusic'
        ])
    },
    methods: {
        //清空列表事件
        clearList () {
            this.clearHistory()
            this.$sunToast('列表清空成功')
        },
        //播放事件
        selectItem (item, index) {
            this.selectPlay({
                list : this.historyList,
                index
            })
        },
        //删除事件
        deleteItem (index) {
            let list = [...this.historyList]
            list.splice(index, 1)
            this.removeHistory(list)
            this.$sunToast('删除成功')
        },
        ...mapMutations({
            setPlaying : 'SET_PLAYING'
        }),
        ...mapActions([
            'selectPlay',
            'clearHistory',
            'removeHistory'
        ])
    }
}
</script>

<style lang="scss" scoped>
@import "~assets/css/base";

.historyList {
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
