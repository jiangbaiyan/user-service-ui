<template>
    <el-dialog
            :title="title"
            :visible.sync="dialogVisible"
            :before-close="resetDialog"
            width="30%">
        <el-form :model="form">
            <el-form-item  label="邮箱">
                <el-input :value="form.email"></el-input>
            </el-form-item>
            <el-form-item  label="昵称">
                <el-input :value="form.name"></el-input>
            </el-form-item>
            <el-form-item label="是否激活">
                <el-radio-group v-model="form.is_activate">
                    <el-radio :label="1">已激活</el-radio>
                    <el-radio :label="0">未激活</el-radio>
                </el-radio-group>
            </el-form-item>
            <el-form-item label="资源节点">
                <el-select v-model="value" placeholder="请选择">
                    <el-option
                            v-for="item in options"
                            :key="item.value"
                            :label="item.label"
                            :value="item.value">
                    </el-option>
                </el-select>
            </el-form-item>
        </el-form>
        <span slot="footer" class="dialog-footer">
    <el-button @click="resetDialog">取消</el-button>
    <el-button type="primary" @click="resetDialog">确定</el-button></span>
    </el-dialog>
</template>

<script>
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
            }
        },
        methods: {
            resetDialog() {
                this.dialogVisible = false;
                this.$emit('resetDialog');
            }
        }
    };
</script>

<style scoped>

</style>
