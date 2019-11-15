<template>
    <div id="app">
        <router-view></router-view>  <!--对应{新闻列表或个人中心的视图，点哪个就算哪个}-->
        <ul>
            <li><router-link :to="{name: 'list'}">新闻列表</router-link></li>
            <li><router-link :to="{name: 'user'}">个人中心</router-link></li>
        </ul>
    </div>
</template>

<script>
    export default {
        name: "Home"
    }
</script>

<style scoped>

</style>