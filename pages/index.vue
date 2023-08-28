<template>
    <div class=" h-screen">
        <Header class="w-screen top-0 backdrop-blur-sm backdrop:opacity-20"/>
        <div class=" mx-[20%]">
            <SegmentsMoto/>
        </div>
    </div>
    
</template>
  

<script lang="ts">
export default {
    setup() {
        definePageMeta({
          layout : false
        })
    },
};
</script>