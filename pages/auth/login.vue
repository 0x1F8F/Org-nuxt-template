<template>
    <div>
        <NuxtLink to="/">
            <h5>Home</h5>
        </NuxtLink>
        <form @submit.prevent="login">
            <input type="text">
            <input type="password">
            <input type="submit" value="Login">
        </form>
    </div>
</template>

<script setup>
definePageMeta({
  layout: false,
});
</script>