<template>
    <el-container>

        <el-main>

            <Header></Header>

            <Modify :form="row" :dialogVisible="dialogVisible" :resource="resource" @resetDialog="resetDialog"></Modify>

            <el-table :data="tableData" stripe style="width: 100%">
                <el-table-column prop="id" label="id" width="180"></el-table-column>
                <el-table-column prop="email" label="邮箱" width="180"></el-table-column>
                <el-table-column prop="name" label="昵称"></el-table-column>
                <el-table-column prop="is_activate" label="是否激活"></el-table-column>
                <el-table-column prop="resource" label="资源节点"></el-table-column>
                <el-table-column prop="created_at" label="创建时间"></el-table-column>
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

            <Footer></Footer>

        </el-main>

    </el-container>
</template>

<script>
    import env from '../../config/env';
    import Modify from "./Modify";
    import Header from "../../components/Header";
    import Footer from "../../components/Footer";

    let params = {
        appId: 'uc_all',
        accessToken: 'adfadsfsad',
        timestamp: 1512412,
        unified_token: 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6NywidGltZSI6MTU3Mjc0OTIyNH0.2k7x_YZ1TpXgdvkFiuMAWgg-Z9z5AIVFu5pprp2WBb8'
    };

    export default {
        name: "List",
        components: {
            Header,
            Footer,
            Modify
        },
        data() {
            return {
                page: 1,
                length: 10,
                total: 0,
                tableData: '',
                name: '',
                dialogVisible: false,
                row: '',
                resource: []
            }
        },
        methods: {
            async query(page = 1, length = 10) {
                this.page = page;
                this.length = length;
                this.$set(params, 'page', page);
                this.$set(params, 'length', length);
                await this.getUser();
            },
            initSelect() {
                let url = env.host + '/resource/query';
                this.$axios.post(url, params).then(response => {
                    this.resource = response.data.data.data;
                })
            },
            getUser() {
                let url = env.host + '/user/query';
                this.$axios.post(url, params).then(response => {
                    this.tableData = response.data.data.data;
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
                let url = env.host + '/user/delete';
                this.$axios.delete(url, {
                    data: {
                        appId: 'uc_all',
                        accessToken: 'adfadsfsad',
                        timestamp: 1512412,
                        unified_token: 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6NywidGltZSI6MTU3Mjc0OTIyNH0.2k7x_YZ1TpXgdvkFiuMAWgg-Z9z5AIVFu5pprp2WBb8',
                        id: row.id
                    }
                }).then(response => {
                    if (response.data.status === 200) {
                        this.resetDialog();
                        this.$alert('删除成功', '提示');
                    } else {
                        this.$alert('删除失败', '提示');
                    }
                });
            },
            resetDialog() {
                this.dialogVisible = false;
            }
        },
        mounted() {
            this.initSelect();
            this.query();
        },
    }
</script>

<style scoped lang="scss">
    .el-pagination {
        margin-top: 20px;
        float: right;
    }
</style>
