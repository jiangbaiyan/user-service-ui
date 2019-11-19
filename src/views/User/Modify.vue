<template>
    <el-dialog
            :title="title"
            :visible.sync="dialogVisible"
            :before-close="resetDialog"
            width="30%">
        <el-form :model="form">
            <el-form-item v-for="(value, key, index) in form" :key="index" :label="key">
                <el-input :value="value"></el-input>
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
                    return [];
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
        },
    };
</script>

<style scoped>

</style>
