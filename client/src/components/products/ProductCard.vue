<template>
  <div class="flex flex-col items-center gap-10 py-2 lg:flex-row lg:gap-0">
    <picture class="basis-2/5">
      <source
        media="(min-width: 64em)"
        srcset="
          ./../../assets/images/product-xx99-mark-two-headphones/desktop/image-category-page-preview.jpg
        "
      />
      <source
        media="(min-width: 48em)"
        srcset="
          ./../../assets/images/product-xx99-mark-two-headphones/tablet/image-category-page-preview.jpg
        "
      />
      <img
        src="./../../assets/images/product-xx99-mark-two-headphones/mobile/image-category-page-preview.jpg"
        alt="xx99-mark-two-headphones"
        class="w-full rounded-lg object-cover md:h-[22rem] lg:h-[25rem] 2xl:h-[35rem]"
      />
    </picture>

    <div
      class="basis-3/5 px-6 text-center lg:px-0 lg:pl-16 lg:text-left xl:pl-32"
    >
      <h4 class="uppercase tracking-[0.5rem] text-orange-450">New Product</h4>
      <h3 class="mt-4 mb-8 font-bold">{{ product.name }}</h3>
      <p class="mb-6">
        {{ product.description }}
      </p>
      <router-link
        class="btn inline-block"
        :to="{
          name: 'ProductDetail',
          params: { category: product.category, productId: product._id },
        }"
        >See Product</router-link
      >
    </div>
  </div>
</template>

<script setup>
defineProps({
  product: {
    type: Object,
    required: true,
  },
});
</script>
