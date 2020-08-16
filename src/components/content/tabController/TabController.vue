<template>
    <div class="tab-controller">
      <div class="tab-controller-item" v-for="(item,index) in items"
      :class="{active : currentItem === index }" @click="changeIdex(index)">
        <span>{{item}}</span>
      </div>
    </div>
</template>

<script>
    export default {
        name: "TabController",
      props:{
        items:Array,
        default() {
          return [];
        }
      },
      data(){
          return{
            currentItem :0
          }
      },
      methods:{
        changeIdex(index){
          this.currentItem=index;
        }
      }
    }
</script>

<style scoped>
  .tab-controller{
    display:flex;
    text-align: center;
    font-size: 15px;
    background-color: white;
  }
  .tab-controller-item{
    flex :1;
    height: 44px;
    line-height: 44px;
  }
  .tab-controller-item span {
    padding: 5px;
  }

  .active {
    color: var(--color-high-text);
  }

  .active span {
    border-bottom: 2px solid var(--color-high-text);
  }
</style>
