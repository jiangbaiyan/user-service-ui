<template>
    <NosLogin :params="params" @login-finish="handleLoginFinish"></NosLogin>
</template>

<script>
    export default {
        name: "Login",
        methods: {
            handleLoginFinish(data) {
                // 登录成功，跳到首页
                if (data.status === 200) {
                    this.$router.push('/');
                } else { // 登录失败，刷新页面
                    this.$alert('账号或密码错误');
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
