<script setup>
const pokemon = defineProps(["name"]);
</script>

<template>
  <div class="flex items-center justify-center rounded-2xl border p-6 xl:p-8">
    <p>{{ pokemon.name }}</p>
  </div>
</template>
