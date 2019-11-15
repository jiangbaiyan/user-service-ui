<template>
    <div>
        标题<el-input v-model="title" placeholder="placeholder"></el-input>
        内容<el-input v-model="content" placeholder="placeholder"></el-input>
        <el-button type="primary" @click="add()">添加</el-button>
    </div>
</template>

<script>
    import store from "@/store/index.js";
    export default {
        name: "Add",
        data() {
            return {
                title: '',
                content: ''
            }
        },
        methods: {
            add() {
                store.commit('addItem', {
                    title: this.title,
                    content: this.content
                })
            }
        }
    }
</script>

<style scoped>

</style>