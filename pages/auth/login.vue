<template>
    <div>
        <NuxtLink to="/">
            <h5>Home</h5>
        </NuxtLink>
        <div class="flex flex-col items-center h-screen justify-center">
            <form @submit.prevent="login" class="flex flex-col items-center m-2">
                <input type="text" placeholder="Username or Email" class="inputField">
                <input type="password" placeholder="Password" class="inputField">
                <input type="submit" value="Login" class=" bg-black text-white rounded-md shadow-md px-3 py-2" >
            </form>
        </div>
        
    </div>
</template>

<script setup>
definePageMeta({
  layout: false,
});
</script>

<style>
.inputField {
    @apply m-2 placeholder:p-2 font-sans text-xl
}
</style>