<script setup></script>

<template>
  <div
    class="flex h-screen w-screen items-center justify-center bg-cover bg-fixed"
    style="background-image: url(src/assets/23236924.jpg)"
  >
    <nav
      class="fixed top-0 flex h-12 w-full items-center justify-center bg-red-500 font-bold text-white"
    >
      <div class="flex justify-center gap-10">
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
      <span class="">Made in {{ new Date().getFullYear() }}</span>
    </footer>
  </div>
</template>
