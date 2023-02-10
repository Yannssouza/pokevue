<script setup>
</script>

<template>
  <div class="flex h-full w-full flex-col">
    <nav>
      <div
        class="flex h-12 items-center justify-center gap-8 bg-blue-500 p-5 font-bold text-white"
      >
        <router-link to="/">Inicio</router-link>
        <router-link to="/About">Sobre</router-link>
      </div>
    </nav>

    <main>
      <router-view></router-view>
    </main>

    <footer
      class="fixed bottom-0 flex h-12 w-full items-center justify-center bg-blue-500 font-bold text-white"
    >
      <span class="">{{ new Date().getFullYear() }}</span>
    </footer>
  </div>
</template>
