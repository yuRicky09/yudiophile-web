<template>
  <header class="border-b border-b-gray-700 bg-zinc-900 text-white">
    <div class="mx-auto max-w-8xl">
      <NavigationDesktop />
      <NavigationMobile />
    </div>
  </header>
</template>

<script setup>
import NavigationDesktop from "@/components/navigation/NavigationDesktop.vue";
import NavigationMobile from "@/components/navigation/NavigationMobile.vue";
</script>
