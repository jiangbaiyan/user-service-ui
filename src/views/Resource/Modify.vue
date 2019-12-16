<template>
    <div>
        <el-button type="primary" @click="handleModifyClick">修改</el-button>
        <el-dialog
                title="修改"
                :visible.sync="dialogVisible"
                :before-close="resetDialog"
                width="30%">
            <el-form :model="form">
                <el-form-item label="父节点">
                    <el-select v-model="form.parent_resource_id" placeholder="请选择资源节点">
                        <el-option
                                v-for="item in resource"
                                :key="item.id"
                                :label="item.full_key"
                                :value="item.id">
                        </el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label="当前节点名称">
                    <el-input v-model="form.cur_key"></el-input>
                </el-form-item>
            </el-form>
            <span slot="footer" class="dialog-footer">
    <el-button @click="resetDialog">取消</el-button>
    <el-button type="primary" @click="handleOnSubmit">确定</el-button></span>
        </el-dialog>
    </div>

</template>

<script>
    import env from "../../config/env";
    let params = env.commonParams;
    export default {
        name: 'Modify',
        props: ['form', 'resource'],
        data() {
            return {
                dialogVisible: false
            }
        },
        methods: {
            handleModifyClick() {
                this.dialogVisible = true;
            },
            handleOnSubmit() {
                // 参数
                Object.assign(params, {
                    id: this.form.id,
                    data: {
                        parent_resource_id: this.form.parent_resource_id,
                        cur_key: this.form.cur_key
                    }
                });
                // 请求
                this.$axios.put('/v1/resource/update', params).then(response => {
                    if (response.data.status === 200) {
                        this.resetDialog();
                        this.$message.success('修改成功');
                        this.$emit('on-submit');
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
