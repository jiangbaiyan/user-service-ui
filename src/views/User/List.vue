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

            <Modify :form="row" :dialogVisible="dialogVisible" @resetDialog="resetDialog"></Modify>

            <el-table :data="tableData" stripe style="width: 100%">
                <el-table-column prop="id" label="id" width="180">
                </el-table-column>
                <el-table-column prop="email" label="邮箱" width="180">
                </el-table-column>
                <el-table-column prop="name" label="昵称">
                </el-table-column>
                <el-table-column prop="is_activate" label="是否激活">
                </el-table-column>
                <el-table-column prop="created_at" label="创建时间">
                </el-table-column>
                <el-table-column prop="updated_at" label="修改时间"></el-table-column>
                <el-table-column label="操作">
                    <template slot-scope="scope">
                        <el-button type="primary" @click="handleModify(scope.row)">修改</el-button>
                        <el-button type="primary" @click="handleDelete(scope.row)">删除</el-button>
                    </template>
                </el-table-column>
            </el-table>

            <el-pagination
                    background
                    layout="total, prev, pager, next, jumper"
                    :total="total"
                    :page-size="length"
                    @current-change="pageChange">
            </el-pagination>

        </el-main>

        <el-footer>
            <p>Copyright © 2004-2019 nos版权所有 Powered by jiangbaiyan</p>
            <p>联系邮箱：
                <a href="mailto:987082332@qq.com">987082332@qq.com</a>
            </p>
        </el-footer>

    </el-container>
</template>

<script>
    import env from '../../config/env';
    import Modify from "./Modify";
    export default {
        name: "List",
        components: {
            Modify
        },
        data() {
            return {
                page: 1,
                length: 10,
                total: 0,
                tableData: '',
                name: 'jiangbaiyan',
                row: {
                    title: '默认标题',
                    content: '内容'
                },
                dialogVisible: false
            }
        },
        methods: {
            async query(page = 1, length = 10) {
                this.page = page;
                this.length = length;
                await this.request();
            },
            request() {
                let params = {
                    appId: 'uc_all',
                    accessToken: 'adfadsfsad',
                    timestamp: 1512412,
                    unified_token: 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6NywidGltZSI6MTU3Mjc0OTIyNH0.2k7x_YZ1TpXgdvkFiuMAWgg-Z9z5AIVFu5pprp2WBb8',
                    page: this.page,
                    length: this.length
                };
                let url = env.host + '/user/query';
                this.$axios.post(url, params).then(response => {
                    let ret = response.data.data.data;
                    // 处理激活状态
                    for (let item of ret) {
                        if (item.is_activate === 1) {
                            item.is_activate = '已激活';
                        } else {
                            item.is_activate = '未激活';
                        }
                    }
                    // 将值赋给table
                    this.tableData = ret;
                    this.total     = response.data.data.total;
                })
            },
            pageChange(curPage) {
                this.query(curPage) // 分页切换查询
            },
            handleModify(row) {
                this.dialogVisible = true;
                this.row = row;
            },
            handleDelete(row) {
                this.dialogVisible = true;
                this.row = row;
            },
            resetDialog() {
                this.dialogVisible = false;
            }
        },
        mounted() {
            this.query(); // 页面加载直接查询
        },
    }
</script>

<style scoped lang="scss">
    .first {
        margin-left: 30%;
    }
    .user {
        float: right;
    }
    .el-pagination {
        margin-top: 20px;
        float: right;
    }
    .el-footer {
        p {
            color: #666;
            text-align: center;
            left: 100px;
            a {
                color: #09f;
            }
        }
    }

</style>
