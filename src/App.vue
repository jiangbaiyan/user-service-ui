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
            let unified_token = localStorage.getItem('unified_token');
            if (unified_token === null) {
                this.$router.push('login');
            } else {
                Object.assign(params, {
                    'unified_token': unified_token
                })
                this.$axios.post('/unified/login', params).then(response => {
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
</style>
