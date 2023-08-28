<template>
    <div>
        <div class=" fixed flex h-screen items-center justify-center md:mx-[23%] animate-pulse">
            
        </div>
        <NuxtLink @click="$router.back">
            <h5>back</h5>
        </NuxtLink>
        <div class="grid w-screen fixed h-screen place-content-center">
            <form @submit.prevent="login" class="flex flex-col items-center border-[4px] border-black rounded-lg p-8 backdrop-blur-lg bg-white/2 backdrop:opacity-20">
                <h1 class=" font-mono text-4xl font-semibold py-5"><span class=" bg-teal-500 text-white">L</span>ogin</h1>
                <input v-model="field.uname" type="text" placeholder="Username or Email" class="inputField">
                <input v-model="field.passwd" type="password" placeholder="Password" class="inputField">
                <div class="flex flex-row">
                    <NuxtLink to="/auth/recover/fgp1"><p class=" p-3 text-sm hover:underline">Forget Password</p></NuxtLink>
                    <NuxtLink to="/auth/signin"><p class=" p-3 text-sm hover:underline">Create Account</p></NuxtLink>
                </div>
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

// async function Login() {
//     await useFetch('/api/login',{
//         method : 'post',
//         header : 'Application/JSON',
//         body : {
//             uname : field.value.uname,
//             passwd : field.value.passwd
//         }
//     })
// }
</script>

<style scoped>
.inputField {
    @apply my-3 mx-4 placeholder:p-2 px-2 font-sans text-xl
}

</style>