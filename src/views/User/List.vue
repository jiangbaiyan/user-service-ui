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
    import Modify from "./Modify";
    import Header from "../../components/Header";
    import Footer from "../../components/Footer";
    import env from "../../config/env";

    let params = env.commonParams;
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
                // 带上分页请求参数
                Object.assign(params, {
                    page: page,
                    length: length
                });
                await this.getUser();
            },
            initSelect() {
                this.$axios.post('/resource/query', params).then(response => {
                    this.resource = response.data.data.data;
                })
            },
            getUser() {
                this.$axios.post('/user/query', params).then(response => {
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
                this.$axios.delete('/user/delete', {
                    data: {
                        params,
                        id: row.id
                    }
                }).then(response => {
                    if (response.data.status === 200) {
                        this.resetDialog();
                        this.$message.success('删除成功');
                    } else {
                        this.$message.error('删除失败');
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
