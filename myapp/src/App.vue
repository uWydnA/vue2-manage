<template>
  <div id="app">
    <transition name="fade" mode='out-in' appear>
      <router-view></router-view>
    </transition>
  </div>
</template>

<style lang="scss" scoped>
.fade-enter-active,
.fade-leave-active {
  opacity: 1;
  transform: translateX(0px);
  transition: all .6s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
  transform: translateY(100px);
}
</style>