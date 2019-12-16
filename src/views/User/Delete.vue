<template>
    <el-button type="primary" @click="handleDeleteClick">删除</el-button>
</template>

<script>
    import env from "../../config/env";
    let params = env.commonParams;
    export default {
        name: "Delete",
        props: ['row'],
        methods: {
            handleDeleteClick() {
                this.$confirm('将删除该用户, 是否确定？', '提示', {
                    confirmButtonText: '确定',
                    cancelButtonText: '取消',
                    type: 'warning'
                }).then(() => {
                    // 请求参数
                    Object.assign(params, {
                        id: this.row.id
                    });
                    // 请求
                    this.$axios.delete('/v1/user/delete', {
                        data: params
                    }).then(response => {
                        if (response.data.status === 200) {
                            this.$message.success('删除成功');
                            this.$emit('on-submit');
                        } else {
                            this.$message.error('删除失败');
                        }
                    });
                });
            },
        }
    }
</script>

<style scoped>

</style>
