<template>
  <div class="bg-zinc-900 text-white">
    <div class="mx-auto max-w-8xl">
      <NavigationDesktop class="md:block" />
      <NavigationMobile class="py-4 md:hidden" />
    </div>
  </div>
</template>

<script setup>
import NavigationDesktop from "@/components/navigation/NavigationDesktop.vue";
import NavigationMobile from "@/components/navigation/NavigationMobile.vue";
</script>
