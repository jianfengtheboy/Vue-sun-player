<template>
    <div id="app">
        <SunHeader></SunHeader>
        <router-view class="router-view"/>
    </div>
</template>

<script>
import SunHeader from 'components/SunHeader/SunHeader'

export default {
    name: 'App',
    components : {
        SunHeader
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
