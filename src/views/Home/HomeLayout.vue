<template>
  <el-container>
    <el-aside :style="{width:!isCollapse?'224px':'64px' }">
      <Aside :isCollapse="isCollapse"></Aside>
    </el-aside>
    <el-container class="is-vertical">
      <!-- <el-header> -->
        <Head :isCollapse="isCollapse" @collapse="collapse"></Head>
      <!-- </el-header> -->
      <el-main>
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
import Aside from '../../components/layout/Aside'
import Head from '../../components/layout/Head'
export default {
  name: 'HomeLayout',
  components: {
    Aside,
    Head
  },
  data() {
    return {
      isCollapse: false
    };
  },
  computed: {
  },
  methods: {
    collapse(){
      this.isCollapse = !this.isCollapse
    }
  }

}
</script>

<style lang="scss" scoped>
.el-container{
  .el-header{
    height: 64px!important;
  }
  .el-aside {
    color: #333;
    height: 100vh;
    line-height: 200px;
    transition: width 0.2s;
  }
  
  .el-main {
    padding: 16px;
    background-color: #eee;
    .content{
      background: #fff;
      box-shadow:0px 1px 6px 0px rgba(51,51,51,0.05);
      max-height: calc(100vh - 96px);
      overflow: auto;
    }
  }
}
</style>