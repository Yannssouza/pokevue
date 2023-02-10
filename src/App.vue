<script setup></script>

<template>
  <div
    class="flex h-screen w-screen items-center justify-center bg-cover bg-fixed"
    style="background-image: url(src/assets/23236924.jpg)"
  >
    <nav
      class="fixed top-0 flex h-12 w-full justify-center bg-red-500 font-bold text-white xl:justify-start xl:px-8"
    >
      <div class="flex items-center gap-10">
        <h1 class="text-2xl">Pokédex</h1>
        <router-link to="/">Inicio</router-link>
        <router-link to="/About">Sobre</router-link>
      </div>
    </nav>

    <main>
      <router-view></router-view>
    </main>

    <footer
      class="fixed bottom-0 flex h-12 w-full items-center justify-center bg-red-500 font-bold text-white"
    >
      <span class="">Pokédex {{ new Date().getFullYear() }}</span>
    </footer>
  </div>
</template>
