<script setup></script>

<template>
  <div
    class="main-bg flex h-screen w-screen flex-col justify-between bg-main bg-cover bg-fixed"
  >
    <nav
      class="flex h-12 w-full justify-center bg-red-500 font-bold text-white shadow xl:justify-start xl:px-8"
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
      class="flex h-12 w-full items-center justify-center bg-red-500 font-bold text-white shadow"
    >
      <span class="">Pokédex {{ new Date().getFullYear() }}</span>
    </footer>
  </div>
</template>
