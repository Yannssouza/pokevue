<script setup>
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
        <img
          v-else
          src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/df7539f3-f060-4fa9-b6ea-b450762fa004/daztjs9-551b5787-7aae-49a6-8a07-2df25af31651.png/v1/fill/w_1024,h_1255,strp/pokemon_egg__10k__by_maniraptavia_daztjs9-fullview.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTI1NSIsInBhdGgiOiJcL2ZcL2RmNzUzOWYzLWYwNjAtNGZhOS1iNmVhLWI0NTA3NjJmYTAwNFwvZGF6dGpzOS01NTFiNTc4Ny03YWFlLTQ5YTYtOGEwNy0yZGYyNWFmMzE2NTEucG5nIiwid2lkdGgiOiI8PTEwMjQifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.sU2T0kR9aZAjRCjSuJE0Dq9n8ddnYf0IA84-m9We1Y4"
          alt=""
        />
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
