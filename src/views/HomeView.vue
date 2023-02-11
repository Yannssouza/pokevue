<script setup>
import { onMounted, reactive, ref, computed } from "vue";
import PokemonList from "../components/PokemonList.vue";
import PokemonCard from "../components/PokemonCard.vue";

let spritesURL = ref(
  "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/"
);
let pokemonListVar = reactive(ref());
let searchPokemon = ref("");
let selectedPokemon = reactive(ref());

onMounted(() => {
  fetch("https://pokeapi.co/api/v2/pokemon?limit=1008&offset=0")
    .then((res) => res.json())
    .then((res) => (pokemonListVar.value = res.results));
});

const pokemonFilter = computed(() => {
  if (pokemonListVar.value && searchPokemon.value) {
    return pokemonListVar.value.filter((pokemon) =>
      pokemon.name.toLowerCase().includes(searchPokemon.value.toLowerCase())
    );
  }
  return pokemonListVar.value;
});

const selectPokemon = async (pokemon) => {
  await fetch(pokemon.url)
    .then((res) => res.json())
    .then(res => selectedPokemon.value = res);
  console.log(selectedPokemon.value);
};
</script>

<template>
  <div
    class="container mx-auto flex max-h-128 max-w-4xl flex-col justify-between rounded-2xl bg-white shadow-2xl md:flex-row lg:flex-row xl:flex-row 2xl:flex-row"
  >
    <div class="basis-1/2">
      <PokemonCard
      :name="selectedPokemon?.name"
      :sprite="selectedPokemon?.sprites.other.home.front_default"
      :xp="selectedPokemon?.base_experience"
      :type="selectedPokemon?.types[0].type.name"
      :weight="selectedPokemon?.weight"
      :height="selectedPokemon?.height"
      />

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
        v-for="pokemon in pokemonFilter"
        :key="pokemon.name"
        :name="pokemon.name"
        :spritesURL="spritesURL + pokemon.url.split('/')[6] + '.png'"
        @click="selectPokemon(pokemon)"
      />
    </div>
  </div>
</template>
