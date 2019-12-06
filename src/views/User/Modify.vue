<template>
    <el-dialog
            :title="title"
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
                <el-select v-model="this.select" placeholder="请选择资源节点">
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
    <el-button type="primary" @click="onSubmit">确定</el-button></span>
    </el-dialog>
</template>

<script>
    import env from "../../config/env";
    let params = env.commonParams;
    export default {
        name: 'Modify',
        props: {
            title: {
                type: String,
                default() {
                    return '修改';
                }
            },
            form: {
                type: Object,
                default() {
                    return null;
                }
            },
            dialogVisible: {
                type: Boolean,
                default() {
                    return false;
                }
            },
            resource: {
                type: Array,
                default() {
                    return [];
                }
            }
        },
        methods: {
            onSubmit() {
                this.$axios.put('/user/update', {
                    params,
                    id: this.form.id,
                    data: {
                        email: this.form.email,
                        name: this.form.name,
                        is_activate: this.form.is_activate,
                        resource_id: this.select
                    }
                }).then(response => {
                    if (response.data.status === 200) {
                        this.resetDialog();
                        this.$message.success('修改成功');
                    } else {
                        this.$message.error('修改失败');
                    }
                });
            },
            resetDialog() {
                this.dialogVisible = false;
                this.$emit('resetDialog');
            }
        },
        data() {
            return {
                select: ''
            }
        },
        watch: {
            form(val) {
                this.resource.forEach(item => {
                    if (item.full_key === val.resource) {
                        this.select = item.id;
                    }
                });
            }
        }
    };
</script>

<style scoped>

</style>
