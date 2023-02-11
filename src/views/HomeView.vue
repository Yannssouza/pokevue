<script setup>
import { onMounted, reactive, ref } from "vue";
import PokemonList from "../components/PokemonList.vue";

let spritesURL = ref(
  "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/"
);
let pokemonListVar = reactive(ref());
let searchPokemon = ref("");

onMounted(() => {
  fetch("https://pokeapi.co/api/v2/pokemon?limit=1008&offset=0")
    .then((res) => res.json())
    .then((res) => (pokemonListVar.value = res.results));
});
</script>

<template>
  <div
    class="container mx-auto flex max-h-128 max-w-4xl flex-col justify-between rounded-2xl bg-white shadow-2xl md:flex-row lg:flex-row xl:flex-row 2xl:flex-row"
  >
    <div class="flex basis-1/2 flex-col items-center justify-center">
      <a class="flex h-12 w-12 items-center justify-center">
        <img
          src="https://www.pngall.com/wp-content/uploads/5/Pikachu-PNG-HD-Image.png"
          alt=""
        />
      </a>
      <div class="p-6">
        <h5 class="mb-2 text-xl font-medium text-gray-900">Card title</h5>
        <p class="mb-4 text-base text-gray-700">
          Some quick example text to build on the card title.
        </p>
      </div>
    </div>
    <div
      class="grid basis-1/2 grid-cols-3 items-center justify-center overflow-x-auto xl:gap-2 xl:p-6"
    >
      <div class="search-bar col-span-3">
        <div class="mb-3">
          <input
            v-model="searchPokemon"
            type="text"
            placeholder="Procurar Pokémon..."
            id="searchPokemon"
            class="m-0 block w-full rounded border border-solid border-gray-300 bg-white px-3 py-1.5 text-base font-normal text-gray-700"
          />
        </div>
      </div>
      <PokemonList
        v-for="pokemon in pokemonListVar"
        :key="pokemon.name"
        :name="pokemon.name"
        :spritesURL="spritesURL + pokemon.url.split('/')[6] + '.png'"
      />
    </div>
  </div>
</template>
