<template>
    <div class=" fixed flex h-screen items-center justify-center md:mx-[23%] animate-pulse sm:mx-[1%]">
        <h1 class=" text-black opacity-10 md:text-[30rem] sm:text-[20rem] lg:text-[30rem]">{{ route.statusCode  }}</h1>
    </div>
    <div class="flex flex-col h-screen items-center justify-center flex-wrap mx-[30%] ">
        <h1 class=" text-black font-semibold">
            Error: <span class=" text-red-500">{{ route.statusCode }}</span>
        </h1>
        <p class=" flex-wrap">
            {{ route.statusMessage }}
        </p>
    </div>
    
</template>

<script setup>
const route = useError()
</script>

<style>
body {
    user-select: none;
}
</style>