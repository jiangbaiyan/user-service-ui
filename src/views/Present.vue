<template>
    <audio ref="audio" controls style="display:block; margin:20% auto;">
        <source src="20191226_214816.mp3" type="audio/mp3npm ">
    </audio>
</template>

<script>
    export default {
        name: "Present",
        mounted() {
            this.$refs.audio.volume = 1;
        }
    }
</script>

<style scoped>

</style>
