<template>
  <div>
    <div class="bg-zinc-900 py-8 text-center text-white">
      <h2 class="uppercase">{{ category }}</h2>
    </div>

    <div class="layout mt-28">
      <div class="section flex flex-col gap-32">
        <ProductCard
          v-for="product in products"
          :key="product._id"
          :product="product"
        />
      </div>

      <ProductListNav>
        <ProductListNavItem
          category="headphones"
          img-url="shared/desktop/image-category-thumbnail-headphones.png"
        />
        <ProductListNavItem
          category="speakers"
          img-url="shared/desktop/image-category-thumbnail-speakers.png"
        />
        <ProductListNavItem
          category="earphones"
          img-url="shared/desktop/image-category-thumbnail-earphones.png"
        />
      </ProductListNav>

      <BrandIntroduction />
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { onBeforeRouteUpdate } from "vue-router";
import ProductCard from "@/components/products/ProductCard.vue";
import ProductListNav from "@/components/navigation/ProductListNav.vue";
import ProductListNavItem from "@/components/navigation/ProductListNavItem.vue";
import BrandIntroduction from "@/components/BrandIntroduction.vue";
import api from "@/api";

const props = defineProps({
  category: {
    type: String,
    required: true,
  },
});

const products = ref(null);

async function getAllProducts(category) {
  try {
    const { data } = await api.product.getAllProducts(category);
    products.value = data.data.products;
    console.log(products.value);
  } catch (err) {
    console.log(err);
  }
}

getAllProducts(props.category);

onBeforeRouteUpdate(async (to) => {
  const category = to.params.category;
  getAllProducts(category);
});
</script>
