<template>
    <div class="flex flex-row justify-between p-4">
        <div>
            <h1 class=" text-2rem font-extrabold text-black">
                Org
            </h1>
        </div>
        <div class=" flex flex-row text-gray-600">
            <NuxtLink to="/">
                <ul><h2 class=" hover:underline px-2">Home</h2></ul>
            </NuxtLink>
            <NuxtLink to="/about">
                <ul><h2 class=" hover:underline px-2">about</h2></ul>
            </NuxtLink>
        </div>
        <div>
            <button class="button" @click="navigateTo('/auth/signin')">Sign up</button>
            <button class="button" @click="navigateTo('/auth/login')">Login</button>
        </div>
    </div>
</template>

<style>
.button {
    @apply p-2 bg-black text-white rounded-md shadow-md mx-1 text-sm;
}
</style>

<script setup>
 
</script>