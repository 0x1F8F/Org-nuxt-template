<template>
    <h1 class=" text-black">
        Error: <span class=" text-red-500">{{ route.statusCode }}</span>
    </h1>
    <p>
        {{ route.statusMessage }}
    </p>
</template>

<script setup>
const route = useError()
</script>