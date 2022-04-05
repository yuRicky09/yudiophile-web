<template>
  <div
    class="mb-32 flex flex-col gap-8 text-center lg:flex-row lg:items-center lg:justify-center"
  >
    <picture class="lg:order-1 lg:w-1/2">
      <source
        media="(min-width: 64em)"
        srcset="./../assets/images/shared/desktop/image-best-gear.jpg"
      />
      <source
        media="(min-width: 48em)"
        srcset="./../assets/images/shared/tablet/image-best-gear.jpg"
      />
      <img
        class="h-72 w-full rounded-xl object-cover lg:h-[36rem]"
        src="./../assets/images/shared/mobile/image-best-gear.jpg"
        alt="image-best-gear"
      />
    </picture>
    <div
      class="space-y-8 md:px-14 lg:w-1/2 lg:px-0 lg:pr-20 lg:text-left xl:pr-40"
    >
      <h2 class="font-bold uppercase">
        Bringing you the <span class="text-orange-450">best</span> audio gear
      </h2>
      <p class="text-gray-500">
        Located at the heart of New York City, Audiophile is the premier store
        for high end headphones, earphones, speakers, and audio accessories. We
        have a large showroom and luxury demonstration rooms available for you
        to browse and experience a wide range of our products. Stop by our store
        to meet some of the fantastic people who make Audiophile the best place
        to buy your portable audio equipment.
      </p>
    </div>
  </div>
</template>

<script setup></script>
