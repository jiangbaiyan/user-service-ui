<template>
    <el-container>

        <el-header>
            <Header></Header>
        </el-header>

        <el-main>

            <Create :resource="resource" @on-submit="handleOnSubmit"></Create>

            <el-table :data="tableData" stripe style="width: 100%">
                <el-table-column prop="id" label="id" width="200"></el-table-column>
                <el-table-column prop="parent_resource_id" label="父节点id" width="200"></el-table-column>
                <el-table-column prop="cur_key" label="节点名称" width="300"></el-table-column>
                <el-table-column prop="full_key" label="AppId" width="300"></el-table-column>
                <el-table-column prop="app_secret" label="AppSecret" width="200"></el-table-column>
                <el-table-column prop="created_at" label="创建时间" width="250"></el-table-column>
                <el-table-column prop="updated_at" label="修改时间" width="200"></el-table-column>
                <el-table-column label="操作">
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
    import Header from "../../components/Header";
    import Footer from "../../components/Footer";
    import env from "../../config/env";
    import Modify from "./Modify";
    import Create from "./Create";
    import Delete from "./Delete";

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
            getUser() {
                this.$axios.post('/v1/resource/query', params).then(response => {
                    this.tableData = response.data.data.data;
                    this.total = response.data.data.total;
                })
            },
            initSelect() {
                this.$axios.post('/v1/resource/query', params).then(response => {
                    this.resource = response.data.data.data;
                    this.resource.unshift({
                        id: 0,
                        full_key: '无',
                    });
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

