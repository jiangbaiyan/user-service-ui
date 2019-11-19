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
    <el-button @click="dialogVisible = false">取消</el-button>
    <el-button type="primary" @click="dialogVisible = false">确定</el-button>
  </span>
    </el-dialog>
</template>

<script>
    export default {
        props: {
            title: {
                type: String,
                default: '提示'
            },
            form: {
                type: Object,
                default() {
                    return [];
                }
            }
        },
        name: 'Popup',
        data() {
            return {
                dialogVisible: false
            };
        },
        methods: {

        }
    };
</script>

<style scoped>

</style>
