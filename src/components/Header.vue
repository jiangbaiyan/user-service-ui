<template>
    <el-header>
        <el-menu
                :default-active="$route.path"
                mode="horizontal"
                text-color="#fff"
                active-text-color="#ffd04b"
                background-color="#545c64"
                class="el-menu-demo"
                router>
            <el-menu-item class="first el-icon-user" index="/"> 用户管理</el-menu-item>
            <el-menu-item class="el-icon-s-cooperation" index="/resource"> 资源管理</el-menu-item>
            <el-menu-item class="el-icon-lock" index="/auth"> 权限管理</el-menu-item>
            <el-menu-item class="user">欢迎您：{{name}}</el-menu-item>
        </el-menu>
    </el-header>
</template>

<script>
    export default {
        name: "Header",
        props: ['name'],
    }
</script>

<style scoped>
    .el-menu-item {
        margin-left: 5%;
    }
    .first {
        margin-left: 20%;
    }
    .user {
        float: right;
    }
</style>
