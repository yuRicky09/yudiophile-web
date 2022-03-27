<template>
  <div>
    <TheNavigation />
    <router-view class="px-4"></router-view>
    <TheFooter class="px-4" />
  </div>
</template>

<script setup>
import TheNavigation from "@/components/navigation/TheNavigation.vue";
import TheFooter from "@/components/TheFooter.vue";
</script>
