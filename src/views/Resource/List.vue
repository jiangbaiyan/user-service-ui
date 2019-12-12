<template>
    <el-container>
        <el-main>
            <Header></Header>
                <div>resource</div>
            <Footer></Footer>
        </el-main>
    </el-container>
</template>

<script>
    import Header from "../../components/Header";
    import Footer from "../../components/Footer";

    export default {
        name: "List",
        components: {
            Header,
            Footer,
        },
    }
</script>

<style scoped>

</style>
