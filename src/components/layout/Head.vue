<template>
  <el-header>
    <div class="head">
      <div class="collapse" @click="collapse">
        <i class="icon-collapse" :class="{'icon-collapse_ac': isCollapse}"></i>
      </div>
      <div class="main_content">
        <Slide :list="list"></Slide>
      </div>
      <div class="options">
        <div class="refresh" @click="refresh">
          <i class="el-icon-refresh"></i>
        </div>
        <div class="user">
          <el-popover
            placement="bottom"
            width="200"
            trigger="hover"
            content="这是一段内容,这是一段内容,这是一段内容,这是一段内容。">
            <el-avatar slot="reference" icon="el-icon-user-solid"></el-avatar>
          </el-popover>
        </div>
      </div>
    </div>
  </el-header>
</template>
<script>
import { sys } from '../../../mock/index'
import Slide from './Slide'
  export default {
    name: 'Head',
    data(){
      return {
        list: []
      }
    },
    props: ['isCollapse'],
    components:{
      Slide
    },
    computed: {
    },
    mounted(){
      this.getSys()
    },
    methods: {
      collapse(){
        this.$emit('collapse')
      },
      refresh(){
        window.location.reload()
      },
      // 获取运应系统的数据
      getSys(){
        this.list = sys()
      }
    }
  }
</script>
<style lang="scss" scoped>
  $item_width : 32px;
  .head{
    height: 64px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .collapse{
      cursor: pointer;
      height: $item_width;
      width: $item_width;
      display: flex;
      justify-content: center;
      align-items: center;
      .icon-collapse{
        display: inline-block;
        width: 28px;
        height: 26px;
        background: url('../../assets/image/collapse.png') no-repeat;
        background-size: contain;
      }
      .icon-collapse_ac{
        transform: rotate(180deg);
      }
    }
    .main_content{
      max-width: calc(100% - 400px);
      flex: 2;
      overflow: hidden;
    }
    .options{
      display: flex;
      flex: .3;
      justify-content: flex-end;
      .refresh{
        height: $item_width;
        width: $item_width;
        font-size: 21px;
        display: flex;
        justify-content: center;
        align-items: center;
        margin-right: 24px;
        cursor: pointer;
      }
      .user{
        width: $item_width;
        height: $item_width;
        .el-avatar{
          width: $item_width;
          height: $item_width;
          line-height: $item_width;
          cursor: pointer;
        }
      }
    }
  }
</style>