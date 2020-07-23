<template>
    <div class="tab-bar-item" @click="myclick">
        <div v-if="!isActive">
            <slot name="item-icon"></slot>
        </div>
        <div v-else>
            <slot name="item-icon-active"></slot>
        </div>
        <div :style="activeStyle">
            <slot name="item-text"></slot>
        </div>

    </div>
</template>

<script>
    export default {
        name: "TabBarItem",
        props:{
            path:String,
            color:{
                type:String,
                default: 'mediumvioletred'
            }
        },
        data(){
            return {
                // isActive: false
            }
        },
        computed:{
            isActive(){
                return this.$route.path.indexOf(this.path) !== -1
            },
            activeStyle(){
                return this.isActive ? {color:this.color} : {}
            }
        },
        methods:{
            myclick(){
                this.$router.replace(this.path);
            }
        }
    }
</script>

<style scoped>
    .tab-bar-item{
        flex:1;
        text-align: center;
        height: 49px;
        font-size: 12px;
    }
    .tab-bar-item img{
        width: 24px;
        height: 24px;
        margin-top: 3px;
        vertical-align: middle;
        margin-bottom: 2px;
    }

</style>
