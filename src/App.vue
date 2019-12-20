<template>
    <div id="app">
        <router-view></router-view>
    </div>
</template>

<script>
    import env from "./config/env";
    let params = env.commonParams;
    export default {
        name:'app',
        mounted() {
            // token校验 && 登录
            let unifiedToken = localStorage.getItem('unified_token');
            if (unifiedToken === null) {
                this.$router.push('login');
            } else {
                Object.assign(params, {
                    'unified_token': unifiedToken
                });
                this.$axios.post('/v1/unified/login', params).then(response => {
                    if (response.data.status === 200) {
                        this.$router.push('/');
                    } else {
                        this.$message.error('您的token过期，请重新登录');
                        this.$router.push('login')
                    }
                });
            }
        }
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
    .el-menu-item {
        margin-left: 5%;
    }
</style>
