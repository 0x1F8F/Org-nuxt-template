<template>
    <div class=" grid fixed h-screen w-screen place-content-center animate-pulse">
        <h1 class=" text-black opacity-10 text-[15rem] md:text-[30rem]">{{ route.statusCode  }}</h1>
    </div>
    <div class="flex flex-col h-screen items-center justify-center flex-wrap mx-[30%] ">
        <h1 class=" text-black font-semibold">
            Error: <span class=" text-red-500">{{ route.statusCode }}</span>
        </h1>
        <p class=" flex-wrap" v-if="route.statusCode >= 500">
            {{ route.url }}
        </p>
        <p class=" flex-wrap">
            {{ route.message }}
        </p>
    </div>
    
</template>

<script>
export default{
    setup() {
        const route = useError();
        return { route }
    }
}
</script>

<style>
body {
    user-select: none;
}
</style>