<script>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
</script>

<template>
  <div>
    <router-view v-slot="{ Component }">
  <transition name="fade" enter-from-class="fade-enter" mode="out-in">
    <component :is="Component" />
  </transition>
</router-view>
  </div>
</template>
<script>

</script>
<style scoped>
.fade-enter {
 
 opacity:0;
 
}
 
.fade-leave{
 
 opacity:1;
 
}
 
.fade-enter-active{
 
 transition:opacity .3s;
 
}
 
.fade-leave-active{
 
 opacity:0;
 
 transition:opacity .3s;
 
}
</style>
