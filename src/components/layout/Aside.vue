<template>
  <div class="aside">
    <div class="logo" :class="{sWidth:isCollapse}">东福运营</div>
    <el-menu default-active="1" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose" :collapse="isCollapse">
      <el-submenu v-for="(item,index) in list" :key="index" :index="++index">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span slot="title">{{item.name}}</span>
        </template>
        <el-menu-item v-for="(iItem,i) in item.children&&item.children" :key="i" :index="index+'-'+i">
          {{iItem.name}}
        </el-menu-item>
      </el-submenu>
      <!-- <el-menu-item index="2">
        <i class="el-icon-menu"></i>
        <span slot="title">导航二</span>
      </el-menu-item>
      <el-menu-item index="3">
        <i class="el-icon-document"></i>
        <span slot="title">导航三</span>
      </el-menu-item>
      <el-menu-item index="4">
        <i class="el-icon-setting"></i>
        <span slot="title">导航四</span>
      </el-menu-item> -->
    </el-menu>
  </div>
</template>

<style lang="scss" scoped>
.aside{
  .logo{
    width: 100%;
    height: 64px;
    line-height: 64px;
    background-color: pink;
  }
  .el-menu{
    .el-menu-item{
      padding-left: 49px!important;
    }
  }
  .el-menu-vertical-demo:not(.el-menu--collapse) {
    width: 224px;
    min-height: 400px;
  }
}
.sWidth{
  width: 64px!important;
}
</style>

<script>
import { sysItemList } from '../../../mock/index'
  export default {
    name: 'Aside',
    data() {
      return {
        list: []
      };
    },
    props: ['isCollapse'],
    mounted(){
      this.getMenu()
    },
    methods: {
      handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      },
      getMenu(){
        this.list = sysItemList()
      }
    }
  }
</script>