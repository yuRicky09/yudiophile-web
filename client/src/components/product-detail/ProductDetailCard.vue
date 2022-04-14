<template>
  <div class="flex flex-col md:flex-row md:items-center">
    <picture class="md:basis-2/5">
      <source
        media="(min-width: 64em)"
        srcset="
          ../../assets/images/product-xx99-mark-two-headphones/desktop/image-product.jpg
        "
      />
      <source
        media="(min-width: 48em)"
        srcset="
          ../../assets/images/product-xx99-mark-two-headphones/tablet/image-product.jpg
        "
      />
      <img
        src="../../assets/images/product-xx99-mark-two-headphones/mobile/image-product.jpg"
        alt="xx99-mark-two"
        class="w-full rounded-lg object-cover md:h-[30rem] lg:h-[35rem]"
      />
    </picture>

    <div class="my-8 space-y-5 md:my-0 md:basis-3/5 md:p-10">
      <h4 class="uppercase tracking-[0.5rem] text-orange-450">New product</h4>
      <h2 class="font-bold">{{ product.name }}</h2>
      <p>
        {{ product.description }}
      </p>
      <span class="block font-bold">${{ product.price }}</span>
      <div class="my-8 flex justify-between md:justify-start md:gap-1 lg:gap-6">
        <QuantityControlBtn />
        <button class="btn">Add to Card</button>
      </div>
    </div>
  </div>
</template>

<script setup>
import QuantityControlBtn from "@/components/UI/QuantityControlBtn.vue";

defineProps({
  product: {
    type: Object,
    required: true,
  },
});
</script>
