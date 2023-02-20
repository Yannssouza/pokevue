<script setup>
const pokemon = defineProps([
  "name1",
  "sprite1",
  "name2",
  "sprite2",
  "name3",
  "sprite3",
]);
</script>

<template>
  <div class="flex justify-center gap-6">
    <div
      v-if="pokemon.name1"
      class="py flex flex-col items-center justify-center rounded-xl border"
    >
      <a class="flex h-24 w-24 basis-1/2 items-center justify-center">
        <img :src="sprite1" alt="" />
      </a>
      <p class="basis-1/2">{{ pokemon.name1 || "???" }}</p>
    </div>
    <div
      v-if="pokemon.name2"
      class="py flex flex-col items-center justify-center rounded-xl border"
    >
      <a class="flex h-24 w-24 basis-1/2 items-center justify-center">
        <img :src="sprite2" alt="" />
      </a>
      <p class="basis-1/2">{{ pokemon.name2 || "???" }}</p>
    </div>
    <div
      v-if="pokemon.name3"
      class="py flex flex-col items-center justify-center rounded-xl border"
    >
      <a class="flex h-24 w-24 basis-1/2 items-center justify-center">
        <img :src="sprite3" alt="" />
      </a>
      <p class="basis-1/2">{{ pokemon.name3 || "???" }}</p>
    </div>
  </div>
</template>
