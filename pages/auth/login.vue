<template>
    <div>
        <div class=" fixed flex h-screen items-center justify-center md:mx-[23%] animate-pulse">
            
        </div>
        <NuxtLink to="/">
            <h5>Home</h5>
        </NuxtLink>
        <div class=" md:mx-[30%] grid h-screen place-content-center">
            <form @submit.prevent="login" class="flex flex-col items-center border-[4px] border-black rounded-lg p-8 backdrop-blur-sm bg-white/30 backdrop:opacity-20">
                <h1 class=" font-mono text-4xl text-black font-semibold">Login</h1>
                <input v-model="field.uname" type="text" placeholder="Username or Email" class="inputField">
                <input v-model="field.passwd" type="password" placeholder="Password" class="inputField">
                <input type="submit" value="Login" class=" bg-black text-white rounded-md shadow-md px-3 py-2" >
            </form>
        </div>
        
    </div>
</template>

<script setup>
import { ref } from 'vue';
const field = ref({
    uname : '',
    passwd : '',
})

async function Login() {
    await useFetch('/api/login',{
        method : 'post',
        header : 'Application/JSON',
        body : {
            uname : field.value.uname,
            passwd : field.value.passwd
        }
    })
}

definePageMeta({
  layout: false,
});
</script>

<style scoped>
.inputField {
    @apply my-3 mx-4 placeholder:p-2 px-2 font-sans text-xl
}

</style>