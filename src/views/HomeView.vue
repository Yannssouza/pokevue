<script setup>
import { onMounted, reactive, ref } from "vue";

let pokemonList = reactive(ref());

onMounted(() => {
  fetch("https://pokeapi.co/api/v2/pokemon?limit=151&offset=0")
    .then((res) => res.json())
    .then((res) => (pokemonList.value = res.results));
});
</script>

<template>
  <div
    class="container mx-auto flex flex-wrap justify-center rounded-2xl bg-white shadow-2xl"
  >
    <div class="flex justify-center">
      <div class="max-w-sm">
        <a class="flex h-64 justify-center">
          <img
            src="https://www.pngall.com/wp-content/uploads/5/Pikachu-PNG-HD-Image.png"
            alt=""
          />
        </a>
        <div class="p-6">
          <h5 class="mb-2 text-xl font-medium text-gray-900">Card title</h5>
          <p class="mb-4 text-base text-gray-700">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
        </div>
      </div>
    </div>
    <div class="flex justify-center">
      <div class="max-w-sm">
        <div class="p-6">
          <h5 class="mb-2 text-xl font-medium text-gray-900">Card title</h5>
          <p class="mb-4 text-base text-gray-700">Test</p>
          <ul>
            <li v-for="pokemon in pokemonList" :key="pokemon.name">
              {{ pokemon.name }}
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>
