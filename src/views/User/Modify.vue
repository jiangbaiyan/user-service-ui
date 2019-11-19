<template>
    <el-dialog
            title="title"
            :visible.sync="dialogVisible"
            width="30%">
        <p v-for="(item, index) in form" :key="index">
            {{item.key}}
            <el-input v-model="item.value"></el-input>
        </p>
        <span slot="footer" class="dialog-footer">
    <el-button @click="resetDialog">取消</el-button>
    <el-button type="primary" @click="resetDialog">确定</el-button>
  </span>
    </el-dialog>
</template>

<script>
    export default {
        name: 'Modify',
        props: {
            title: {
                type: String,
                default: '修改'
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
