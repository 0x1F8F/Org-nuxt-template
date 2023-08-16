<template>
    <h1>r</h1>
    <div>
        <input ref="searchField" type="text" />
    </div>
</template>
  

<script>
import { ref } from 'vue';

export default {
    setup() {
        searchField = ref(null)
    },

  mounted() {
    window.addEventListener('keydown', this.handleGlobalKeyDown);
  },


  beforeDestroy() {
    window.removeEventListener('keydown', this.handleGlobalKeyDown);
  },


  methods: {
    handleGlobalKeyDown(event) {
      if (event.key === '/') {
        console.log('Specific character "A" pressed globally.');
      }
    }
  }


};
</script>