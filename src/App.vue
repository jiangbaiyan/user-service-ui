<template>
    <div id="app">
        <NosRegLogin :login-url="loginUrl" :register-url="registerUrl" @login-finish="handleLoginFinish"></NosRegLogin>
        <router-view></router-view>
    </div>
</template>

<script>
    export default {
        name:'app',
        data() {
            return {
                params: {
                    appId: 'uc_all',
                    accessToken: 'uc_all',
                    timestamp: 131231
                },
                loginUrl   : '/v1/unified/login',
                registerUrl: '/v1/unified/register'
            }
        },
        methods: {
            handleLoginFinish(data) {
                // 登录成功，跳到首页
                if (data.status === 200) {
                    this.$router.push('/');
                } else { // 登录失败，刷新页面
                    this.$message.error('登录失败，请重试');
                    location.reload();
                }
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
