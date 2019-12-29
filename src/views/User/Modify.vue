<template>

    <div>
        <el-button type="primary" @click="handleModifyClick">修改</el-button>

        <el-dialog
                title="修改用户"
                :visible.sync="dialogVisible"
                :before-close="resetDialog"
                width="30%">
            <el-form :model="form">
                <el-form-item label="邮箱">
                    <el-input v-model="form.email"></el-input>
                </el-form-item>
                <el-form-item label="昵称">
                    <el-input v-model="form.name"></el-input>
                </el-form-item>
                <el-form-item label="是否激活">
                    <el-radio-group v-model="form.is_activate">
                        <el-radio :label="1">已激活</el-radio>
                        <el-radio :label="0">未激活</el-radio>
                    </el-radio-group>
                </el-form-item>
                <el-form-item label="资源节点">
                    <el-select v-model="form.resource_id" placeholder="请选择资源节点">
                        <el-option
                                v-for="item in resource"
                                :key="item.id"
                                :label="item.full_key"
                                :value="item.id">
                        </el-option>
                    </el-select>
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
                        email: this.form.email,
                        name: this.form.name,
                        is_activate: this.form.is_activate,
                        resource_id: this.form.resource_id
                    }
                });
                // 请求
                this.$axios.put('/v1/user/update', params).then(response => {
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
            }
        },
    };
</script>

<style scoped>

</style>
