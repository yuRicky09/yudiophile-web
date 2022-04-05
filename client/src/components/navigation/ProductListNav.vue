<template>
  <div
    class="relative flex flex-col items-center justify-center gap-5 py-8 before:absolute before:bottom-0 before:left-0 before:-z-10 before:h-4/5 before:w-full before:rounded-xl before:bg-gray-100"
  >
    <img :src="imageUrl" class="h-auto w-1/2 object-cover" />
    <h3 class="font-bold">{{ categoryTitle }}</h3>
    <router-link
      to="#"
      class="group flex items-center gap-4 transition-colors hover:text-orange-300"
      ><span>SHOP</span
      ><ArrowRightIcon class="transition-transform group-hover:translate-x-1"
    /></router-link>
  </div>
</template>

<script setup>
import ArrowRightIcon from "@/assets/images/svg/arrow-right.svg";
import { useGetImageUrl } from "@/composables/useGetImageUrl";

const props = defineProps({
  categoryTitle: {
    type: String,
    required: true,
  },
  imgUrl: {
    type: String,
    required: true,
  },
  // linkTo: {
  //   type: String,
  //   required: true,
  // },
});

const imageUrl = useGetImageUrl(props.imgUrl);
</script>
