<template>
    <div>
        <div class=" fixed flex h-screen items-center justify-center md:mx-[23%] animate-pulse">
            
        </div>
        <NuxtLink @click="$router.back">
            <h5>back</h5>
        </NuxtLink>
        <div class="grid w-screen fixed h-screen place-content-center">
            <form @submit.prevent="login" class="flex flex-col items-center border-[4px] border-black rounded-lg p-8 backdrop-blur-lg bg-white/2 backdrop:opacity-20">
                <h1 class=" font-mono text-4xl font-semibold py-5"><span class=" bg-teal-500 text-white">S</span>ignup</h1>
                <input v-model="field.email" type="email" placeholder="Email Address" class="inputField">
                <input v-model="field.passwd" type="password" placeholder="Password" class="inputField">
                <input v-model="field.passwd1" type="password" placeholder="Re-type" class="inputField">
                <NuxtLink to="/auth/login"><p class=" p-3 text-1 hover:underline">Already have an account?</p></NuxtLink>
                <input type="submit" value="Create" class=" bg-black text-white rounded-md shadow-md px-3 py-2" >
            </form>
        </div>
        
    </div>
</template>

<script setup>
import { ref } from 'vue';
const field = ref({
    email : '',
    passwd : '',
    passwd1 : '',
})
</script>

<style scoped>
.inputField {
    @apply my-3 mx-4 placeholder:p-2 px-2 font-sans text-xl
}

</style>