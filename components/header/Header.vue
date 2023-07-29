<template>
    <div class="flex flex-row justify-between p-4">
        <div>
            <h1 class=" text-2rem font-extrabold text-black">
                A<span class=" text-purple-400 font-mono">j</span>
            </h1>
        </div>
        <div class=" flex flex-row text-gray-600">
            <NuxtLink to="/">
                <ul><h2 class=" hover:underline px-2">Home</h2></ul>
            </NuxtLink>
            <NuxtLink to="/about">
                <ul><h2 class=" hover:underline px-2">about</h2></ul>
            </NuxtLink>
            <ul><h2>{{ $route.path=="/"? "root":"about" }}</h2></ul>
        </div>
        <div>
            <button class="button">Sign up</button>
            <button class="button">Login</button>
        </div>
    </div>
</template>

<style>
.button {
    @apply p-2 bg-purple-500 rounded-full mx-1 text-sm;
}
</style>

<script setup>
 
</script>