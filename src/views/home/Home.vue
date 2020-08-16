<template>
   <div id="home">
     <NavBar class="nav-home">
       <div slot="center">购物街</div>
     </NavBar>
     <HomeSwiper :banner="banner"></HomeSwiper>
     <feature-view :features="recommend"></feature-view>
     <PopularView/>
     <TabController :items="['流行','新款','推荐']"></TabController>

     <ul>
       <li>ceshi </li>
       <li>ceshi</li>
       <li>ceshi</li>
       <li>ceshi</li>
     </ul>
   </div>
</template>

<script>
  import NavBar from "components/common/navbar/NavBar";
  import TabController from "components/content/tabController/TabController"

  import HomeSwiper from "./childSwiper/HomeSwiper"
  import FeatureView from "./childSwiper/FeatureView"
  import PopularView from "./childSwiper/PopularView"
  import {getHomeMultiData} from "network/home";

  export default {
        name: "Home",
        components:{
           NavBar,
          TabController,
          HomeSwiper,
          FeatureView,
          PopularView
        },
        data(){
           return{
             result:null,
             banner:[],
             dKeyword:[],
             keywords:[],
             recommend:[]
           }
        },
        created() {
          getHomeMultiData().then((res)=>{
            this.result=res;
            this.banner=res.data.banner.list;
            this.dKeyword=res.data.dKeyword.list;
            this.keywords=res.data.keywords.list;
            this.recommend=res.data.recommend.list;
          })
        }
  }
</script>

<style scoped>
.nav-home{
  text-align: center;
  color:#fff;
  background-color: var(--color-tint);
  /*position: fixed;*/
  /*left: 0px;*/
  /*right: 0px;*/
  /*top: 0px;*/
}
</style>
