<template>
    <div class="grid h-screen w-screen place-content-center">
        <div class=" flex flex-col w-fit h-fill border-[4px] border-black rounded-lg p-[1rem] items-center">
            <h1>Recover password</h1>
            <input type="text">
            <p>Send passeord reset link</p>
            <button type="button">Send</button>
        </div>
    </div>
    <div class=" fixed top-0">
        <NuxtLink @click="$router.back()">
            <p>back</p>
        </NuxtLink>
    </div>
</template>

<script setup>

</script>