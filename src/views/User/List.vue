<template>
    <el-container>

        <el-header>
            <el-menu
                    mode="horizontal"
                    text-color="#fff"
                    active-text-color="#ffd04b"
                    background-color="#545c64"
                    class="el-menu-demo">
                <el-menu-item class="first el-icon-user" index="1"> 用户管理</el-menu-item>
                <el-menu-item class="el-icon-s-cooperation" index="2"> 业务管理</el-menu-item>
                <el-menu-item class="el-icon-lock" index="3"> 权限管理</el-menu-item>
                <el-menu-item class="user"> 欢迎您：{{name}}</el-menu-item>
            </el-menu>
        </el-header>


        <el-main>
            <el-table
                    :data="tableData"
                    stripe
                    style="width: 100%">
                <el-table-column
                        prop="id"
                        label="id"
                        width="180">
                </el-table-column>
                <el-table-column
                        prop="email"
                        label="邮箱"
                        width="180">
                </el-table-column>
                <el-table-column
                        prop="name"
                        label="昵称">
                </el-table-column>
                <el-table-column
                        prop="is_activate"
                        label="是否激活">
                </el-table-column>
                <el-table-column
                        prop="created_at"
                        label="创建时间">
                </el-table-column>
                <el-table-column
                        prop="updated_at"
                        label="修改时间">
                </el-table-column>
                <el-table-column
                        label="操作">
                    <el-button type="primary">修改</el-button>
                    <el-button type="primary">删除</el-button>
                </el-table-column>
            </el-table>
        </el-main>

    </el-container>
</template>

<script>
    export default {
        name: "List",
        data() {
            return {
                tableData: '',
                name: 'jiangbaiyan'
            }
        },
        mounted() {
            this.$ajax.post('http://152.136.125.67:9600/user/query', {
                appId: 'uc_all',
                accessToken: 'adfadsfsad',
                timestamp: 1512412,
                unified_token: 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6NywidGltZSI6MTU3Mjc0OTIyNH0.2k7x_YZ1TpXgdvkFiuMAWgg-Z9z5AIVFu5pprp2WBb8',
            }).then((response) => {
                for (let item of response.data.data) {
                    if (item.is_activate === 1) {
                        item.is_activate = '已激活';
                    } else {
                        item.is_activate = '未激活';
                    }
                }
                this.tableData = response.data.data;
            }).catch((error) => {
                console.log(error)
            });
        },
    }
</script>

<style scoped>
    .first {
        margin-left: 30%;
    }

    .user {
        float: right;
    }
</style>