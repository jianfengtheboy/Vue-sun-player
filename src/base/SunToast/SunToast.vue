<template>
    <transition name="toast-fade">
        <div v-show="visible" class="sun-toast" :class="positionClass">{{message}}</div>
    </transition>
</template>

<script>
export default {
    name : 'sun-toast',
    data () {
        return {
            position : 'center',
            message : '',
            duration : 1500,
            visible : false
        }
    },
    computed : {
        positionClass() {
            return 'sun-toast-' + this.position
        }
    }
}
</script>

<style lang="scss">
.sun-toast {
    position: fixed;
    left: 50%;
    z-index: 1992;
    max-width: 80%;
    box-sizing: border-box;
    border-radius: 5px;
    padding:10px 20px;
    overflow: hidden;
    text-align: center;
    min-height: 40px;
    line-height: 20px;
    font-size: 14px;
    color: #fff;
    background: rgba(0,0,0,.5);
    user-select: none;
    transform: translateX(-50%);
    &-top {
        top: 10%;
    }
    &.sun-toast-center {
        top: 50%;
        margin-top: -20px;
    }
    &.sun-toast-bottom {
        bottom: 10%;
    }
}
.toast-fade-enter {
    opacity: 0;
    transform: translate3d(-50%, -10px, 0);
}
.toast-fade-enter-active {
    will-change: transform;
    transition: all .2s;
}
.toast-fade-enter-to {
    opacity: 1;
    transform: translate3d(-50%, 0, 0);
}
</style>
