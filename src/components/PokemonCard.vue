<script setup>
import pokemonEgg from "../assets/pokemonEgg.png"
const pokemon = defineProps([
  "sprite",
  "name",
  "xp",
  "weight",
  "type",
  "height",
]);
</script>

<template>
  <div class="flex flex-col items-center justify-center">
    <div class="pt-6 xl:pt-0">
      <a class="flex h-32 w-32 items-center justify-center">
        <img v-if="pokemon.name" :src="pokemon.sprite" alt="" />
        <img v-else :src="pokemonEgg" alt="" />
      </a>
    </div>
    <div class="p-5 text-center">
      <h5 class="mb-2 border-b-2 pb-2 text-xl font-medium text-gray-900">
        {{ pokemon.name || "???" }}
      </h5>
      <div
        v-if="pokemon.xp"
        class="grid grid-cols-4 items-center justify-center gap-4 border-b-2"
      >
        <div class="mb-2 flex flex-row items-center justify-center">
          <h2 class="pr-2 font-medium text-gray-900">Base XP:</h2>
          <p class="text-base text-gray-700">{{ pokemon.xp }}</p>
        </div>
        <div class="mb-2 flex flex-row items-center justify-center">
          <h2 class="pr-2 font-medium text-gray-900">Tipo:</h2>
          <p class="text-base text-gray-700">{{ pokemon.type }}</p>
        </div>
        <div class="mb-2 flex flex-row items-center justify-center">
          <h2 class="pr-2 font-medium text-gray-900">Peso:</h2>
          <p class="text-base text-gray-700">{{ pokemon.weight }}</p>
        </div>
        <div class="mb-2 flex flex-row items-center justify-center">
          <h2 class="pr-2 font-medium text-gray-900">Altura:</h2>
          <p class="text-base text-gray-700">{{ pokemon.height }}</p>
        </div>
        <!--        <div class="mb-2 flex flex-row items-center justify-center">-->
        <!--          <h2 class="pr-2 font-medium text-gray-900">Altura:</h2>-->
        <!--          <p class="text-base text-gray-700">10</p>-->
        <!--        </div>-->
        <!--        <div class="mb-2 flex flex-row items-center justify-center">-->
        <!--          <h2 class="pr-2 font-medium text-gray-900">Tipo:</h2>-->
        <!--          <p class="text-base text-gray-700">10</p>-->
        <!--        </div>-->
        <!--        <div class="mb-2 flex flex-row items-center justify-center">-->
        <!--          <h2 class="pr-2 font-medium text-gray-900">Altura:</h2>-->
        <!--          <p class="text-base text-gray-700">10</p>-->
        <!--        </div>-->
        <!--        <div class="mb-2 flex flex-row items-center justify-center">-->
        <!--          <h2 class="pr-2 font-medium text-gray-900">Tipo:</h2>-->
        <!--          <p class="text-base text-gray-700">10</p>-->
        <!--        </div>-->
      </div>
    </div>
  </div>
</template>
