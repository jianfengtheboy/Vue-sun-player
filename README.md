# vue-sun-player

> This is a music player made by Vue.

> api : [网易云音乐 NodeJS 版 API](https://binaryify.github.io/NeteaseCloudMusicApi)

## Build Setup

> SunPlayer

```
git clone https://github.com/jianfengtheboy/Vue-sun-player.git //下载SunPlayer

cd SunPlayer //进入SunPlayer目录

npm install (或者cnpm install) //安装依赖

npm run dev (或者cnpm run dev) //服务端运行

npm run build //项目打包
```

> 后台服务器

```
cd SunPlayer/server //进入后台服务器目录

npm install (或者cnpm install) //安装依赖

node app.js //服务端运行 访问 http://localhost:3000/
```

#### 运行SunPlayer后无法获取音乐请检查后台服务器是否启动
#### assets/js/config的url地址要和后台服务器地址一致

## Skills

- Vue-Cli（Vue 脚手架工具）
- Vue（核心框架）
- Vue-Router（页面路由）
- Vuex（状态管理）
- ES 6 / 7 （JavaScript 语言的下一代标准）
- Sass（CSS预处理器）
- Axios（网络请求）
- FastClick（解决移动端300ms点击延迟）

## Function

- 登录网易云账号功能
- 同步网易云歌单功能
- 快捷键控制
    - 上一曲 Ctrl + Left
    - 播放暂停 Ctrl + Space
    - 下一曲 Ctrl + Right
    - 切换播放模式 Ctrl + O
    - 音量加 Ctrl + Up
    - 音量减 Ctrl + Down
- 移动端下的样式兼容
- 搜索功能

## P.S :

- 后续想做React版跟小程序版。。。估计会拖很久。。。
