<script setup>
</script>

<template>
  <div>
    <nav>
      <div
        class="flex h-12 items-center justify-center xl:justify-start gap-12 px-8 bg-blue-500 p-5 font-bold text-white"
      >
        <router-link to="/">Inicio</router-link>
        <router-link to="/About">Sobre</router-link>
      </div>
    </nav>

    <main>
      <router-view></router-view>
    </main>

    <footer
      class="fixed bottom-0 w-full flex h-12 items-center justify-center bg-blue-500 font-bold text-white"
    >
      <span class="">{{ new Date().getFullYear() }}</span>
    </footer>
  </div>
</template>
