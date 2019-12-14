<template>
    <el-dialog
            title="修改"
            :visible.sync="dialogVisible"
            :before-close="resetDialog"
            width="30%">
        <el-form :model="form">
            <el-form-item label="节点名称">
                <el-input v-model="form.cur_key"></el-input>
            </el-form-item>
        </el-form>
        <span slot="footer" class="dialog-footer">
    <el-button @click="resetDialog">取消</el-button>
    <el-button type="primary" @click="onSubmit">确定</el-button></span>
    </el-dialog>
</template>

<script>
    import env from "../../config/env";
    let params = env.commonParams;
    export default {
        name: 'Modify',
        props: ['form', 'dialogVisible'],
        methods: {
            handleOnSubmit() {
                // 参数
                Object.assign(params, {
                    id: this.form.id,
                    data: {
                        email: this.form.email,
                        name: this.form.name,
                        is_activate: this.form.is_activate,
                        resource_id: this.form.resource_id
                    }
                });
                // 请求
                this.$axios.put('/v1/user/create', params).then(response => {
                    if (response.data.status === 200) {
                        this.resetDialog();
                        this.$message.success('修改成功');
                    } else {
                        this.resetDialog();
                        this.$message.error('修改失败');
                    }
                });
            },
            resetDialog() {
                this.dialogVisible = false;
                this.$emit('reset-dialog');
            }
        },
    };
</script>

<style scoped>

</style>
