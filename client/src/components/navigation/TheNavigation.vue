<template>
  <header class="border-b border-b-gray-700 bg-zinc-900 text-white">
    <div class="layout">
      <NavigationDesktop />
      <NavigationMobile />
    </div>
  </header>
</template>

<script setup>
import NavigationDesktop from "@/components/navigation/NavigationDesktop.vue";
import NavigationMobile from "@/components/navigation/NavigationMobile.vue";
</script>
