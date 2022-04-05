<template>
  <div>
    <div class="bg-zinc-900 py-8 text-center text-white">
      <h2 class="uppercase">{{ category }}</h2>
    </div>

    <div class="layout mt-28">
      <div class="section flex flex-col gap-32">
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </div>

      <ProductListNav>
        <ProductListNavItem
          category-title="HEADPHONES"
          img-url="shared/desktop/image-category-thumbnail-headphones.png"
        />
        <ProductListNavItem
          category-title="SPEAKERS"
          img-url="shared/desktop/image-category-thumbnail-speakers.png"
        />
        <ProductListNavItem
          category-title="EARPHONES"
          img-url="shared/desktop/image-category-thumbnail-earphones.png"
        />
      </ProductListNav>

      <BrandIntroduction />
    </div>
  </div>
</template>

<script setup>
import ProductCard from "@/components/products/ProductCard.vue";
import ProductListNav from "@/components/navigation/ProductListNav.vue";
import ProductListNavItem from "@/components/navigation/ProductListNavItem.vue";
import BrandIntroduction from "@/components/BrandIntroduction.vue";

defineProps({
  category: {
    type: String,
    required: true,
  },
});
</script>
