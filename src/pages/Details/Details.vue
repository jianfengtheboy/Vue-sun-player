<template>
    <div class="details">
        <SunLoading v-model="sunLoadShow"></SunLoading>
        <MusicList :list="list" @select="selectItem"></MusicList>
    </div>
</template>

<script>
import { mapActions } from 'vuex'
import { getPlaylistDetail } from '../../api/index'
import SunLoading from '../../base/SunLoading/SunLoading'
import MusicList from '../../components/MusicList/MusicList'
import formatSongs from '../../assets/js/song'
import { loadMixin } from '../../assets/js/mixins'

export default {
    name: "details",
    mixins: [loadMixin],
    components : {
        SunLoading,
        MusicList
    },
    data: () => ({
        list : []
    }),
    created() {
        //获取歌单详情
        getPlaylistDetail (this.$route.params.id).then((res) => {
            if(res.data.code === 200) {
                this.list = formatSongs(res.data.result.tracks)
                document.title = `${res.data.result.name} - sunPlayer在线音乐播放器`;
                this._hideLoad()
            }
        })
    },
    methods: {
        selectItem (item ,index) {
            this.selectPlay({
                list : this.list,
                index
            })
        },
        ...mapActions([
            'selectPlay'
        ])
    }
}
</script>

<style lang="scss" scoped>
.details {
    position: relative;
    width: 100%;
    height: 100%;
    .musicList {
        width: 100%;
        height: 100%;
    }
}
</style>
