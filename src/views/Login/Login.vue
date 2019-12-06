<template>
    <NosLogin :dialog-visible="true" :params="params" @login-finish="handleLoginFinish"></NosLogin>
</template>

<script>
    export default {
        name: "Login",
        methods: {
            handleLoginFinish(data) {
                // 登录成功，跳到首页
                if (data.status === 200) {
                    localStorage.setItem('unified_token', data.data.unified_token);
                    this.$router.push('/');
                } else { // 登录失败，刷新页面
                    this.$message.error('账号或密码错误');
                    location.reload();
                }
            }
        },
        data() {
            return {
                params: {
                    appId: 'uc_all',
                    accessToken: 'uc_all',
                    timestamp: 131231
                }
            }
        }
    }
</script>

<style scoped>

</style>
