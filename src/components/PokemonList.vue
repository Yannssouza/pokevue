<script setup>
const pokemon = defineProps(["name", "spritesURL"]);
const pokemonUpperCase =
  pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1);
</script>

<template>
  <div
    class="py flex flex-col items-center justify-center rounded-xl border hover:bg-red-500 active:bg-red-700"
  >
    <a class="flex h-24 w-24 basis-1/2 items-center justify-center">
      <img :src="spritesURL" alt="" />
    </a>
    <p class="basis-1/2">{{ pokemonUpperCase }}</p>
  </div>
</template>
