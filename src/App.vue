<script setup>
import { ref } from "vue";

let num = ref(0);
</script>

<template>
  <div class="flex h-full w-full flex-col">
    <nav>
      <div class="flex h-12 items-center justify-center gap-8 bg-blue-500 p-5 text-white font-bold">
        <router-link to="/home">Home</router-link>
        <router-link to="/about">About</router-link>
      </div>
    </nav>

    <main>
      <router-view></router-view>
    </main>

    <footer
      class="fixed bottom-0 flex h-12 w-full items-center justify-center bg-blue-500 text-white font-bold"
    >
      <span class="">{{ new Date().getFullYear() }}</span>
    </footer>
  </div>
</template>
