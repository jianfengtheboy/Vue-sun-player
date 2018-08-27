<template>
    <div class="sun-no-result">
        <p class="sun-no-result-text">{{title}}</p>
    </div>
</template>

<script>
export default {
    name: "sun-no-result",
    props : {
        //无数据提示文本
        title : {
            type : String,
            default : ''
        }
    }
}
</script>

<style lang="scss">
@import "~assets/css/base";

.sun-no-result {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    &-text {
        margin-top: 30px;
        font-size: $font_size_medium;
        color: $text_color;
    }
}
</style>
