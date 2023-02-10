<script setup>
import { ref } from "vue";

let num = ref(0);
</script>

<template>
  <div>
    <button @click="num++">
      {{ num }}
    </button>
    <h1 class="m-10 text-3xl font-bold text-red-600">Hello World</h1>
  </div>
</template>
