<template>
    <!--我的歌单-->
    <div class="userList">
        <SunLoading v-model="sunLoadShow"></SunLoading>
        <template v-if="list.length > 0">
            <div class="list-item" v-for="item in list" :key="item.id" v-if="item.trackCount > 0" :title="item.name">
                <router-link :to="{path:`/music/details/${item.id}`}" tag="div" class="userList-item">
                    <img class="cover-img" v-lazy="`${item.coverImgUrl}?param=200y200`" />
                    <h3 class="name">{{item.name}}</h3>
                </router-link>
            </div>
        </template>
        <SunNoResult v-else title="啥也没有哦，快去登录看看吧！" />
    </div>
</template>

<script>
import { mapGetters } from 'vuex'
import { getUserPlayList } from '../../api/index'
import { loadMixin } from '../../assets/js/mixins'
import SunLoading from '../../base/SunLoading/SunLoading'
import SunNoResult from '../../base/SunNoResult/SunNoResult'

export default {
    name: "play-list",
    mixins: [loadMixin],
    components: {
        SunLoading,
        SunNoResult
    },
    data: () => ({
        list : [] //列表
    }),
    computed : {
        ...mapGetters([
            'uid'
        ])
    },
    watch : {
        uid(newUid) {
            if(newUid) {
                this.sunLoadShow = true
                this._getUserPlaylist(newUid)
            }else{
                this.list = []
            }
        }
    },
    created () {
        if(!this.uid) {
            this.sunLoadShow = false
        }else{
            this._getUserPlaylist(this.uid)
        }
    },
    activated () {
        if(this.uid && this.list.length === 0) {
            this.sunLoadShow = true
            this._getUserPlaylist(this.uid)
        }else if (!this.uid && this.list.length !== 0) {
            this.list = []
        }
    },
    methods: {
        //获取我的歌单详情
        _getUserPlaylist(uid) {
            getUserPlayList(uid).then(res => {
                if(res.data.code === 200) {
                    if(res.data.playlist.length === 0) {
                        return
                    }
                    this.list = res.data.playlist
                    this._hideLoad()
                }
            })
        }
    }
}
</script>

<style lang="scss" scoped>
@import "~assets/css/base";
@import "~assets/css/mixin";

.userList {
    position: relative;
    width: 100%;
    height: 100%;
    overflow-x: hidden;
    overflow-y: auto;
    &-head {
        height: 100px;
    }
    .list-item {
        float: left;
        width: calc(100% / 7);
        .userList-item {
            width: 130px;
            text-align: center;
            cursor: pointer;
            margin:0 auto 20px;
            &:hover {
                color: #fff;
            }
            .name {
                height: 30px;
                line-height: 30px;
                font-size: $font_size_medium;
                @include no-wrap;
            }
            @media (max-width: 1100px) {
                width: 80%;
            }
        }
        @media (max-width: 1500px) {
            width: calc(100% / 6)
        }
        @media (max-width: 1400px) , (max-width: 960px) {
            width: calc(100% / 5);
        }
        @media (max-width: 1280px) , (max-width: 768px) {
            width: calc(100% / 4);
        }
        @media (max-width: 540px) {
            width: calc(100% / 3);
        }
    }
}
</style>
