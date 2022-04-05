<template>
  <div>
    <TheNavigation />
    <router-view></router-view>
    <TheFooter />
  </div>
</template>

<script setup>
import TheNavigation from "@/components/navigation/TheNavigation.vue";
import TheFooter from "@/components/TheFooter.vue";
</script>
