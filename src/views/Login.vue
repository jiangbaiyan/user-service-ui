<template>
    <div>
        <el-button type="primary" @click="reg()">登录</el-button>
        <el-button type="primary">注册</el-button>
    </div>
</template>

<script>
    export default {
        name: "Login",
        methods: {
            reg() {
                this.$router.push('/home/list');
            }
        }
    }
</script>

<style scoped>

</style>