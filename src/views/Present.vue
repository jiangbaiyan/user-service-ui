<template>
    <audio ref="audio" src="20191226_214816.mp3" controls style="display:block; margin:20% auto;"></audio>
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
