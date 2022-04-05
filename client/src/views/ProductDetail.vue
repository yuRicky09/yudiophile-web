<template>
  <div class="layout">
    <router-link to="#" class="my-10 inline-block hover:text-orange-450"
      >Go Back</router-link
    >

    <div class="section">
      <ProductDetailCard />
    </div>

    <div class="section flex flex-col gap-16 lg:flex-row lg:gap-8 xl:gap-32">
      <div class="flex flex-col lg:basis-4/6">
        <h3 class="mb-6 font-bold uppercase">Features</h3>
        <p>
          Featuring a genuine leather head strap and premium earcups, these
          headphones deliver superior comfort for those who like to enjoy
          endless listening. It includes intuitive controls designed for any
          situation. Whether you’re taking a business call or just in your own
          personal space, the auto on/off and pause features ensure that you’ll
          never miss a beat. The advanced Active Noise Cancellation with
          built-in equalizer allow you to experience your audio world on your
          terms. It lets you enjoy your audio in peace, but quickly interact
          with your surroundings when you need to. Combined with Bluetooth 5. 0
          compliant connectivity and 17 hour battery life, the XX99 Mark II
          headphones gives you superior sound, cutting-edge technology, and a
          modern design aesthetic.
        </p>
      </div>

      <div
        class="flex flex-col gap-6 md:flex-row lg:basis-2/6 lg:flex-col lg:gap-0 lg:self-start"
      >
        <h3 class="font-bold uppercase md:basis-1/2 lg:mb-6">In the box</h3>
        <ul class="space-y-4 md:basis-1/2">
          <li><span class="mr-4 text-orange-450">1x</span>Headphone unit</li>
          <li><span class="mr-4 text-orange-450">2x</span>Headphone unit</li>
          <li><span class="mr-4 text-orange-450">1x</span>Headphone unit</li>
          <li><span class="mr-4 text-orange-450">1x</span>Headphone unit</li>
          <li><span class="mr-4 text-orange-450">1x</span>Headphone unit</li>
        </ul>
      </div>
    </div>

    <div
      class="section grid grid-cols-1 gap-5 md:grid-cols-2 md:grid-rows-[11rem_11rem] xl:grid-rows-[18rem_18rem]"
    >
      <picture
        class="h-44 md:col-start-1 md:col-end-2 md:row-start-1 md:row-end-2 md:h-full"
      >
        <source
          media="(min-width: 64em)"
          srcset="
            ../assets/images/product-xx99-mark-two-headphones/desktop/image-gallery-1.jpg
          "
        />
        <source
          media="(min-width: 48em)"
          srcset="
            ../assets/images/product-xx99-mark-two-headphones/tablet/image-gallery-1.jpg
          "
        />
        <img
          src="../assets/images/product-xx99-mark-two-headphones/mobile/image-gallery-1.jpg"
          alt="xx99-mark-two"
          class="h-full w-full rounded-lg object-cover"
        />
      </picture>

      <picture
        class="h-44 md:col-start-1 md:col-end-2 md:row-start-2 md:row-end-3 md:h-full"
      >
        <source
          media="(min-width: 64em)"
          srcset="
            ../assets/images/product-xx99-mark-two-headphones/desktop/image-gallery-2.jpg
          "
        />
        <source
          media="(min-width: 48em)"
          srcset="
            ../assets/images/product-xx99-mark-two-headphones/tablet/image-gallery-2.jpg
          "
        />
        <img
          src="../assets/images/product-xx99-mark-two-headphones/mobile/image-gallery-2.jpg"
          alt="xx99-mark-two"
          class="h-full w-full rounded-lg object-cover"
        />
      </picture>

      <picture
        class="h-[23rem] md:col-start-2 md:col-end-3 md:row-start-1 md:row-end-3 md:h-full"
      >
        <source
          media="(min-width: 64em)"
          srcset="
            ../assets/images/product-xx99-mark-two-headphones/desktop/image-gallery-3.jpg
          "
        />
        <source
          media="(min-width: 48em)"
          srcset="
            ../assets/images/product-xx99-mark-two-headphones/tablet/image-gallery-3.jpg
          "
        />
        <img
          src="../assets/images/product-xx99-mark-two-headphones/mobile/image-gallery-3.jpg"
          alt="xx99-mark-two"
          class="h-full w-full rounded-lg object-cover"
        />
      </picture>
    </div>

    <ReconmendList>
      <ReconmendListItem />
      <ReconmendListItem />
      <ReconmendListItem />
    </ReconmendList>

    <ProductListNav>
      <ProductListNavItem
        category-title="headphones"
        img-url="shared/desktop/image-category-thumbnail-headphones.png"
      />
      <ProductListNavItem
        category-title="speakers"
        img-url="shared/desktop/image-category-thumbnail-speakers.png"
      />
      <ProductListNavItem
        category-title="earphones"
        img-url="shared/desktop/image-category-thumbnail-earphones.png"
      />
    </ProductListNav>

    <BrandIntroduction />
  </div>
</template>

<script setup>
import BrandIntroduction from "@/components/BrandIntroduction.vue";
import ProductDetailCard from "@/components/product-detail/ProductDetailCard.vue";
import ReconmendList from "@/components/product-detail/ReconmendList.vue";
import ReconmendListItem from "@/components/product-detail/ReconmendListItem.vue";
import ProductListNav from "@/components/navigation/ProductListNav.vue";
import ProductListNavItem from "@/components/navigation/ProductListNavItem.vue";
</script>
