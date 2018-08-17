import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const routes = [
    {
        path : '/',
        redirect : '/music'
    },
    {
        path : '/music',
        component : () => import('pages/music'),
        redirect : '/music/playlist',
        children : [
            {
                path : '/music/playlist', //正在播放列表
                component : () => import('pages/PlayList/PlayList'),
                meta : {
                    keepAlive : true
                }
            },
            {
                path : '/music/userlist', //我的歌单
                component : () => import('pages/UserList/UserList'),
                meta : {
                    title : '我的歌单',
                    keepAlive : true
                }
            },
            {
                path : '/music/toplist', //排行榜列表
                component : () => import('pages/TopList/TopList'),
                meta : {
                    title : '排行榜',
                    keepAlive : true
                }
            },
            {
                path : '/music/details/:id', //音乐详情列表
                component : () => import('pages/Details/Details')
            },
            {
                path : '/music/historylist', //我听过的列表
                component : () => import('pages/HistoryList/HistoryList'),
                meta : {
                    title : '我听过的'
                }
            },
            {
                path : '/music/search', //搜索
                component : () => import('pages/Search/Search'),
                meta : {
                    title : '搜索',
                    keepAlive : true
                }
            },
            {
                path : '/music/comment/:id', //音乐评论
                component : () => import('pages/Comment/Comment'),
                meta : {
                    title : '评论详情'
                }
            }
        ]
    }
]

export default new Router({
    linkActiveClass : 'active',
    linkExactActiveClass : 'active',
    routes
})
