<template>
    <div>
        <NosSiteMap :dialogVisible="dialogVisible" @dialog-close="dialogVisible = false"></NosSiteMap>
        <el-menu
                :default-active="$route.path"
                mode="horizontal"
                text-color="#fff"
                active-text-color="#ffd04b"
                background-color="#545c64"
                class="el-menu-demo"
                router>
            <el-menu-item class="first el-icon-user" index="/user"> 用户管理</el-menu-item>
            <el-menu-item class="el-icon-s-cooperation" index="/resource"> 资源管理</el-menu-item>
            <el-menu-item class="el-icon-location" @click="dialogVisible = true"> 站点地图</el-menu-item>
            <el-menu-item class="user">欢迎您：{{name}}</el-menu-item>
        </el-menu>
    </div>
</template>

<script>
    import env from "../config/env";
    let params = env.commonParams;
    export default {
        name: "Header",
        data() {
            return {
                name: '',
                dialogVisible: false
            }
        },
        mounted() {
            Object.assign(params, {
                'unified_token': localStorage.getItem('unified_token')
            });
            this.$axios.post('/v1/unified/user/query', params).then(response => {
                if (response.data.status === 200) {
                    this.name = response.data.data.data[0].name;
                    if (this.name === '' || this.name === undefined) {
                        this.name = response.data.data.data[0].email;
                    }
                } else {
                    this.$message.error('您的token过期，请重新登录');
                    this.$router.push('/');
                }
            });
        }
    }
</script>

<style scoped>
    .first {
        margin-left: 20%;
    }
    .user {
        float: right;
    }
    .el-menu-item {
        margin-left: 5%;
    }
</style>
