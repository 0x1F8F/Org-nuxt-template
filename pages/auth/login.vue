<template>
    <div>
        <video src="/bg.mp4" autoplay muted loop class=" absolute h-screen w-full object-cover"></video>
        <LoginDialog1/>
    </div>
</template>

<script lang="ts" setup>
import LoginDialog1 from "@/components/auth/LoginDialog1.vue";
definePageMeta({
    layout: false,
});
</script>