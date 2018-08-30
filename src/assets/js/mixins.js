import { mapGetters, mapMutations, mapActions } from 'vuex'

/**
 * 歌曲列表
 */
export const listMixin = {
    computed : {
        ...mapGetters([
            'playing',
            'currentMusic'
        ])
    },
    methods : {
        selectItem(item, index) {
            if(item.id === this.currentMusic.id && this.playing) {
                this.setPlaying(false)
            }else{
                this.selectPlay({
                    list : this.list,
                    index
                })
            }
        },
        ...mapMutations({
            setPlaying : 'SET_PLAYING'
        }),
        ...mapActions([
            'selectPlay'
        ])
    }
}

/**
 * loading状态
 *
 */
export const loadMixin = {
    data () {
        return {
            sunLoadShow : true, //loading状态
        }
    },
    methods : {
        _hideLoad () {
            let timer
            clearTimeout(timer)
            timer = setTimeout(() => {
                this.sunLoadShow = false
            },200)
        }
    }
}
