<template>
    <ul>
        <li v-for="(item, index) of pageLists"
        :key="index">
            {{item}}
        </li>
    </ul>
</template>

<script>
    import store from '@/store/index.js'
    export default {
        name: "List",
        store,
        computed: {
            pageLists: store.state.lists
        }
    }
</script>

<style scoped>

</style>