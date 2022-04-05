<template>
  <div class="flex flex-col items-center gap-6">
    <picture>
      <source
        media="(min-width: 64em)"
        srcset="../../assets/images/shared/desktop/image-xx59-headphones.jpg"
      />
      <source
        media="(min-width: 48em)"
        srcset="../../assets/images/shared/tablet/image-xx59-headphones.jpg"
      />
      <img
        src="../../assets/images/shared/mobile/image-xx59-headphones.jpg"
        alt="xx59-headphones"
        class="h-full w-full rounded-lg object-cover"
      />
    </picture>
    <h3 class="font-bold">XX59</h3>
    <router-link to="#" class="btn inline-block">See Product</router-link>
  </div>
</template>

<script setup></script>
