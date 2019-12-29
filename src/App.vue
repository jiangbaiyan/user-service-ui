<template>
    <div id="app" v-title data-title="用户中心">
        <router-view></router-view>
    </div>
</template>

<script>
    export default {
        name:'app'
    }
</script>

<style>
    #app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }
    * {
        margin: 0;
        padding: 0;
    }
    .el-pagination {
        margin-top: 20px;
        float: right;
    }
</style>
