<template>
    <div>
        <p>Copyright © 2004-2019 nos版权所有 Powered by jiangbaiyan</p>
        <p>联系邮箱：
            <a href="mailto:987082332@qq.com">987082332@qq.com</a>
        </p>
    </div>
</template>

<script>
    export default {
        name: "Footer"
    }
</script>

<style scoped lang="scss">
    .el-footer {
        position: fixed;
        left: 40%;
        margin-top: 10%;
        p {
            color: #666;
            text-align: center;
            left: 100px;
            a {
                color: #09f;
            }
        }
    }
</style>
