<script setup>
import { onMounted, reactive, ref, computed } from "vue";
import PokemonList from "../components/PokemonList.vue";
import PokemonCard from "../components/PokemonCard.vue";
import EvolutionChain from "../components/EvolutionChain.vue";

let spritesURL = ref(
  "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/"
);
let pokemonListVar = reactive(ref());
let searchPokemon = ref("");
let selectedPokemon = reactive(ref());
let pokemonSpecie = reactive(ref());
let evolutionChain = reactive(ref());
let displayCard = ref(false);
let displayList = ref(true);

onMounted(() => {
  fetch("https://pokeapi.co/api/v2/pokemon?limit=905&offset=0")
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
    .then((res) => (selectedPokemon.value = res));
};
const getEvolutionChain = async (pokemon) => {
  await fetch(`https://pokeapi.co/api/v2/pokemon-species/${pokemon.name}`)
    .then((res) => res.json())
    .then((res) => {
      pokemonSpecie.value = res;
    });
  await fetch(pokemonSpecie.value.evolution_chain.url)
    .then((res) => res.json())
    .then((res) => {
      evolutionChain.value = res;
    });
};
</script>

<template>
  <div
    class="container mx-auto flex max-h-128 max-w-4xl flex-col justify-center rounded-2xl bg-neutral-100 py-2 shadow-2xl md:flex-row lg:flex-row xl:flex-row 2xl:flex-row"
  >
    <div
      v-show="displayCard"
      class="relative flex basis-1/2 flex-col justify-center"
    >
      <button
        class="absolute top-2 px-3"
        @click="[(displayList = !displayList), (displayCard = !displayCard)]"
      >
        Return
      </button>
      <PokemonCard
        :name="selectedPokemon?.name"
        :xp="selectedPokemon?.base_experience"
        :sprite="selectedPokemon?.sprites.other.home.front_default"
        :hp="selectedPokemon?.stats[0].base_stat"
        :attack="selectedPokemon?.stats[1].base_stat"
        :defense="selectedPokemon?.stats[2].base_stat"
        :sAttack="selectedPokemon?.stats[3].base_stat"
        :sDefense="selectedPokemon?.stats[4].base_stat"
        :speed="selectedPokemon?.stats[5].base_stat"
        :type="selectedPokemon?.types[0].type.name"
        :weight="selectedPokemon?.weight"
        :height="selectedPokemon?.height"
      />
      <EvolutionChain
        :name1="evolutionChain?.chain.species.name"
        :sprite1="
          spritesURL + evolutionChain?.chain.species.url.split('/')[6] + '.png'
        "
        :name2="evolutionChain?.chain?.evolves_to[0]?.species.name"
        :sprite2="
          spritesURL +
          evolutionChain?.chain?.evolves_to[0]?.species.url.split('/')[6] +
          '.png'
        "
        :name3="
          evolutionChain?.chain?.evolves_to[0]?.evolves_to[0]?.species.name
        "
        :sprite3="
          spritesURL +
          evolutionChain?.chain?.evolves_to[0]?.evolves_to[0]?.species.url.split(
            '/'
          )[6] +
          '.png'
        "
      />
    </div>
    <div
      v-show="displayList"
      class="grid basis-1/2 grid-cols-3 justify-center overflow-x-auto xl:gap-2 xl:p-6"
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
        @click="
          [
            selectPokemon(pokemon),
            getEvolutionChain(pokemon),
            (displayCard = !displayCard),
            (displayList = !displayList),
          ]
        "
      />
    </div>
  </div>
</template>
