<template>
  <div class="common-layout">
    <el-container>
      <el-aside>
        <Left></Left>
      </el-aside>
      <el-container>
        <el-header>
          <Top></Top>
        </el-header>
        <el-main>
          <!-- <router-view  v-slot="{ Component }" v-if="$route.meta.keepAlive">
            <keep-alive>
              <component :is="Component" />
            </keep-alive>
          </router-view>
          
          <router-view  v-if="!$route.meta.keepAlive"></router-view>
  -->
<!-- <router-view v-slot="{ Component, route }" :key="$route.path">
  <keep-alive v-if="Component">
    <component  :is="Component" v-if="route.meta.keepAlive"></component>
  </keep-alive>
  <component  :is="Component" v-if="!route.meta.keepAlive"></component>
</router-view> -->

<div>
  <!-- <router-view v-slot="{ Component,route }" :key="this.$route.path">
  <transition name="fade-transform" mode="out-in">
    <keep-alive><component :is="Component"  /></keep-alive>
  </transition>
</router-view> -->


<router-view v-slot="{ Component,route }">
  <transition name="fade-transform" enter-from-class="fade-transform-enter" mode="out-in">
    <!-- <keep-alive v-if="route.meta.keepAlive">
      <component :is="Component" />
    </keep-alive>
    <component :is="Component" v-else /> -->
        <keep-alive>
      <component :is="Component" include='project-common' />
    </keep-alive>
    <!-- <component :is="Component" /> -->
  </transition>
</router-view>
</div>

      </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import Left from '@/components/Left'
import Top from '@/components/Top'
// import NProgress from 'nprogress'
// import 'nprogress/nprogress.css'
// import { ElMessage,ElLoading } from 'element-plus'
export default {
  components: {
    Left,
    Top,
  },
  data(){
    return{
    }
  },
  beforeCreate()
  {
  },
  created() {
  },
  mounted(){

  }

}
</script>
<style>


.transitionRouter-enter-active, .transitionRouter-leave-active {
    transition: all 4s;
} .transitionRouter-enter, .transitionRouter-leave{
    transform: translate3d(100%, 0, 0);
}



.fade-enter {
 
 opacity:0;
 
}
 
.fade-leave{
 
 opacity:1;
 
}
 
.fade-enter-active{
 
 transition:opacity 5s;
 
}
 
.fade-leave-active{
 
 opacity:0;
 
 transition:opacity .5s;
 
}
  /* fade-transform */
  .fade-transform--move,
.fade-transform-leave-active,
.fade-transform-enter-active {
  transition: all .5s;
}

.fade-transform-leave-active {
  position: absolute;
}

.fade-transform-enter {
  opacity: 0;
  transform: translateX(-30px);
}

.fade-transform-leave-to {
  opacity: 0;
  transform: translateX(30px);
}

/* .slide-right-enter-active,
.slide-right-leave-active,
.slide-left-enter-active,
.slide-left-leave-active {
  height: 100%;
  will-change: transform;
  transition: all 500ms;
  position: absolute;
  backface-visibility: hidden;
  perspective: 1000;
}
.slide-right-enter {
  opacity: 0;
  transform: translate3d(-100%, 0, 0);
}
.slide-right-leave-active {
  opacity: 0;
  transform: translate3d(100%, 0, 0);
}
.slide-left-enter {
  opacity: 0;
  transform: translate3d(100%, 0, 0);
} */

/* .v-enter-active,
.v-leave-active {
  transition: opacity 2s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
} */


/* .aside-right-enter-active,
.aside-right-leave-active {
    transition: all 0.5s ease;
}

.aside-right-enter-from,
.aside-right-leave-to {
    transform: translate(100%, 0);
} */


/* .fade-enter-from,
.fade-leave-to {
  opacity: 0;
} */



/* .scale-enter-active,
.scale-leave-active {
  transition: all 0.5s ease;
}
.scale-enter-from,
.scale-leave-to {
  opacity: 0;
  transform: scale(0.9);
} */


/* .fade-enter-to,
.fade-leave-from {
  opacity: 0;
} */

/* .fade-enter-active,
.fade-leave-active {
  transition: opacity 2s ease;
} */

/* 上面是用来路由过渡的动画效果 */
.el-header {
  /* margin: 0; */
  padding: 0;
  position: relative;
  width: calc(100% - 200px);
  height: 60px;
  left: 200px;
  overflow-x: hidden;
  box-shadow: 0 5px 5px rgba(0, 21, 41, .08);
  /* flex: 1; */
}

.el-aside {
  /* background-color: blue; */
  -moz-box-shadow: 10px 0px 5px rgba(0, 21, 41, .08);
  /* 老的 Firefox */
  box-shadow: 5px 0px 5px rgba(0, 21, 41, .08);
  min-height: 100vh;
  /* width: 100%; */
  height: 100%;
  width: 200px;
  display: block;
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
}

.el-main {
  position: absolute;
  left: 200px;
  right: 0;
  top: 60px;
  bottom: 0;
  overflow-y: scroll;
}
</style>