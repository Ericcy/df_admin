<template>
  <div class="carousel_txt">
    <div class="content">
      <div class="item" v-for="(item,index) in list" :key="index">{{item.name}}</div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Slide',
  data(){
    return {}
  },
  props:['list']
}
</script>
<style lang="scss" scoped>
  .carousel_txt{
    .content{
      display: flex;
      .item{
        align-self: center;
        margin: 0 10px;
        min-width: 48px;
        white-space:nowrap;
        overflow:hidden;
        text-overflow:ellipsis;
        cursor: pointer;
      }
    }
  }
</style>