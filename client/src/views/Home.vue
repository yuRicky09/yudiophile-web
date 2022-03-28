<template>
  <div>
    <HeroImage />
    <div class="section flex flex-col gap-6">
      <ProductListNav
        category-title="HEADPHONES"
        img-url="shared/desktop/image-category-thumbnail-headphones.png"
      />
      <ProductListNav
        category-title="SPEAKERS"
        img-url="shared/desktop/image-category-thumbnail-speakers.png"
      />
      <ProductListNav
        category-title="EARPHONES"
        img-url="shared/desktop/image-category-thumbnail-earphones.png"
      />
    </div>

    <div class="section grid grid-cols-1 gap-y-8">
      <div
        class="flex flex-col items-center rounded-xl bg-orange-450 bg-[url('/src/assets/images/home/desktop/pattern-circles.svg')] bg-cover bg-top bg-no-repeat py-14 px-10 text-center text-white"
      >
        <picture class="mb-8">
          <source
            media="(min-width: 64em)"
            srcset="./../assets/images/home/desktop/image-speaker-zx9.png"
          />
          <source
            media="(min-width: 48em)"
            srcset="./../assets/images/home/tablet/image-speaker-zx9.png"
          />
          <img
            src="./../assets/images/home/mobile/image-speaker-zx9.png"
            alt="speaker-zx9"
            class="h-52 w-44"
          />
        </picture>

        <div class="flex flex-col items-center gap-8">
          <h2 class="font-bold">
            ZX9 <br />
            SPEAKER
          </h2>
          <p>
            Upgrade to premium speakers that are phenomenally built to deliver
            truly remarkable sound.
          </p>
          <router-link to="#" class="btn btn-black text-black"
            >SEE PRODUCT</router-link
          >
        </div>
      </div>

      <div class="relative overflow-hidden rounded-xl">
        <picture>
          <source
            media="(min-width: 64em)"
            srcset="./../assets/images/home/desktop/image-speaker-zx7.jpg"
          />
          <source
            media="(min-width: 48em)"
            srcset="./../assets/images/home/tablet/image-speaker-zx7.jpg"
          />
          <img
            src="./../assets/images/home/mobile/image-speaker-zx7.jpg"
            alt="speaker-zx7"
            class="h-full w-full object-cover"
          />
        </picture>
        <div class="absolute top-1/2 left-6 -translate-y-1/2">
          <h2 class="mb-5">ZX7 SPEAKER</h2>
          <router-link to="#" class="btn btn-alt inline-block"
            >See Product</router-link
          >
        </div>
      </div>

      <div class="flex flex-col gap-6">
        <picture class="rounded-xl">
          <source
            media="(min-width: 64em)"
            srcset="./../assets/images/home/desktop/image-earphones-yx1.jpg"
          />
          <source
            media="(min-width: 48em)"
            srcset="./../assets/images/home/tablet/image-earphones-yx1.jpg"
          />
          <img
            src="./../assets/images/home/mobile/image-earphones-yx1.jpg"
            alt="earphones-yx1"
          />
        </picture>
        <div class="space-y-6 rounded-xl bg-gray-50 py-12 px-6">
          <h2 class="font-bold">YX1 EARPHONES</h2>
          <router-link to="#" class="btn btn-alt inline-block"
            >See Product</router-link
          >
        </div>
      </div>
    </div>

    <BrandIntroduction class="section" />
  </div>
</template>

<script setup>
import HeroImage from "@/components/home/HeroImage.vue";
import ProductListNav from "@/components/navigation/ProductListNav.vue";
import BrandIntroduction from "@/components/BrandIntroduction.vue";
</script>
