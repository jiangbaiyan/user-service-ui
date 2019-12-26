<template>
    <NosRegLogin :unified_token="unifiedToken" :params="params" :login-url="loginUrl" :register-url="registerUrl" @login-finish="handleLoginFinish"></NosRegLogin>
</template>

<script>
    export default {
        name:'login',
        data() {
            return {
                params: {
                    appId: 'uc_all',
                    accessToken: 'uc_all',
                    timestamp: 131231,
                    callback_url: 'http://152.136.125.67:9600'
                },
                loginUrl   : '/v1/unified/login',
                registerUrl: '/v1/unified/register',
                unifiedToken: ''
            }
        },
        methods: {
            handleLoginFinish(data) {
                // 登录成功，跳到首页
                if (data.status === 200) {
                    // 激活检测
                    if (data.data.is_activate === 0) {
                        this.$message.error('您还没有激活您的账户，请到邮箱激活后重试');
                    } else {
                        localStorage.setItem('unified_token', data.data.unified_token);
                        this.$router.push('/user');
                    }
                } else { // 登录失败，刷新页面
                    this.$message.error('登录失败，请重试');
                    location.reload();
                }
            }
        },
        created() {
            this.unifiedToken = localStorage.getItem('unified_token');
        }
    }
</script>
