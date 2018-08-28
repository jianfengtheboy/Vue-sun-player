<template>
    <div id="app">
        <SunHeader></SunHeader>
        <router-view class="router-view"/>
        <!--播放器-->
        <audio ref="sunPlayer"></audio>
    </div>
</template>

<script>
const pkg = require('../package.json')
import { mapMutations, mapActions } from 'vuex'
import { topList } from './api/index'
import { defaultSheetId } from './assets/js/config'
import { createTopList } from './assets/js/song'
import SunHeader from 'components/SunHeader/SunHeader'
import { getVersion, setVersion } from './assets/js/storage'

export default {
    name: 'app',
    components : {
        SunHeader
    },
    created() {
        //获取正在播放列表
        topList(defaultSheetId)
            .then((res) => {
                if(res.status === 200) {
                    let list = this._formatSongs(res.data.playlist.tracks.slice(0,100))
                    this.setPlaylist({list})
                }
            })

        //设置title
        let OriginTitile = document.title, titleTime
        document.addEventListener('visibilitychange', function() {
            if(document.hidden) {
                document.title = '死鬼去哪里了！';
                clearTimeout(titleTime);
            }else {
                document.title = '(つェ⊂)咦!又好了!';
                titleTime = setTimeout(function () {
                    document.title = OriginTitile;
                }, 2000);
            }
        })

        //设置audio元素
        this.$nextTick(() => {
            this.setAudioele(this.$refs.sunPlayer)
        })
        //首次加载完成移除动画
        if (document.querySelector('#appLoading')) {
            document.querySelector('#appLoading').classList.add("removeAnimate");
            setTimeout(() => {
                document.body.removeChild(document.getElementById('appLoading'));
                let version = getVersion(), newVersion = pkg.version;
                if (version !== null) {
                    setVersion(newVersion);
                    if (version !== newVersion) {
                        this.$refs.versionDialog.show()
                    }
                } else {
                    setVersion(newVersion);
                    this.$refs.versionDialog.show()
                }
            }, 500)
        }
    },
    methods: {
        _formatSongs(list) {
            let ret = []
            list.forEach((item) => {
                const musicData = item
                if(musicData.id) {
                    ret.push(createTopList(musicData))
                }
            })
            return ret
        },
        ...mapMutations({
            setAudioele : 'SET_AUDIOELE'
        }),
        ...mapActions([
            'setPlaylist'
        ])
    }
}
</script>

<style lang="scss">
@import "~assets/css/base";

#app {
    color: $text_color;
    font-size: $font_size_medium;
    .router-view {
        width: 100%;
        height: 100%;
    }
    audio {
        position: fixed;
    }
}
</style>
