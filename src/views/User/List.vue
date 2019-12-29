<template>
    <el-container>

        <el-header>
            <Header></Header>
        </el-header>

        <el-main>

            <Create :resource="resource"  @on-submit="handleOnSubmit"></Create>

            <el-table :data="tableData" stripe style="width: 100%">
                <el-table-column prop="id" label="id" width="200"></el-table-column>
                <el-table-column prop="email" label="邮箱" width="300"></el-table-column>
                <el-table-column prop="name" label="昵称"></el-table-column>
                <el-table-column prop="is_activate" label="是否激活"></el-table-column>
                <el-table-column prop="resource" label="资源节点"></el-table-column>
                <el-table-column prop="created_at" label="创建时间"></el-table-column>
                <el-table-column prop="updated_at" label="修改时间"></el-table-column>
                <el-table-column label="修改" width="80">
                    <template slot-scope="scope">
                        <Modify :form="scope.row" :resource="resource" @on-submit="handleOnSubmit"></Modify>
                    </template>
                </el-table-column>
                <el-table-column label="删除" width="150">
                    <template slot-scope="scope">
                        <Delete :row="scope.row" @on-submit="handleOnSubmit"></Delete>
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
    import Modify from "./Modify";
    import Create from "./Create";
    import Delete from "./Delete";
    import Header from "../../components/Header";
    import Footer from "../../components/Footer";
    import env from "../../config/env";

    let params = env.commonParams;
    export default {
        name: "List",
        components: {
            Header,
            Footer,
            Modify,
            Create,
            Delete
        },
        data() {
            return {
                page: 1,
                length: 10,
                total: 0,
                tableData: [],
                name: '',
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
                this.$axios.post('/v1/resource/query', params).then(response => {
                    this.resource = response.data.data.data;
                })
            },
            getUser() {
                this.$axios.post('/v1/user/query', params).then(response => {
                    this.tableData = response.data.data.data;
                    this.total     = response.data.data.total;
                })
            },
            pageChange(curPage) {
                this.query(curPage) // 分页切换查询
            },
            handleOnSubmit() {
                this.initSelect();
                this.query();
            }
        },
        mounted() {
            this.initSelect();
            this.query();
        },
    }
</script>

<style scoped lang="scss">

</style>
