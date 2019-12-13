<template>
    <el-container>

        <el-header>
            <Header></Header>
        </el-header>

        <el-main>

            <Modify :form="row" :dialogVisible="dialogVisible" :resource="resource" @reset-dialog="handleResetDialog"
                    @on-submit="handleOnSubmit"></Modify>

            <el-table :data="tableData" stripe style="width: 100%">
                <el-table-column prop="id" label="id" width="180"></el-table-column>
                <el-table-column prop="cur_key" label="节点名称" width="180"></el-table-column>
                <el-table-column prop="full_key" label="完整节点" width="180"></el-table-column>
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

        </el-main>

        <el-footer>
            <Footer></Footer>
        </el-footer>

    </el-container>
</template>

<script>
    import Header from "../../components/Header";
    import Footer from "../../components/Footer";
    import env from "../../config/env";

    let params = env.commonParams;
    export default {
        name: "List",
        components: {
            Header,
            Footer,
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
            getUser() {
                this.$axios.post('/v1/resource/query', params).then(response => {
                    this.tableData = response.data.data.data;
                    this.total = response.data.data.total;
                })
            },
            pageChange(curPage) {
                this.query(curPage) // 分页切换查询
            },
            handleModify(row) {
                this.dialogVisible = true;
                this.row = row;
            },
            handleDelete() {

            },
            handleResetDialog() {
                this.dialogVisible = false;
            },
            handleOnSubmit() {
                this.initSelect();
                this.query();
            }
        },
        mounted() {
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
