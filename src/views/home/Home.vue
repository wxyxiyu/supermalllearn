<template>
   <div id="home">
     <NavBar class="nav-home">
       <div slot="center">购物街</div>
     </NavBar>
   </div>
</template>

<script>
  import NavBar from "components/common/navbar/NavBar";
  import {getHomeMultiData} from "network/home";

  export default {
        name: "Home",
        components:{
           NavBar
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
}
</style>
