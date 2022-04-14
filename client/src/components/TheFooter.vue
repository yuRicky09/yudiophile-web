<template>
  <div class="bg-zinc-900">
    <div
      class="layout grid grid-cols-1 items-center justify-items-center gap-y-8 py-10 text-center text-white md:grid-cols-2 md:justify-items-start md:text-left lg:py-14"
    >
      <router-link
        :to="{ name: 'Home' }"
        class="relative transition-colors before:absolute before:-top-10 before:left-0 before:h-1 before:w-full before:bg-orange-300 hover:text-orange-300 md:col-span-2 lg:before:-top-14 xl:col-[1_/_2] xl:row-[1_/_2]"
        ><h2 class="text-2xl font-extrabold">yudiophile</h2></router-link
      >

      <nav
        class="md:col-span-2 xl:col-[2_/_3] xl:row-[1_/_2] xl:justify-self-end"
      >
        <ul class="flex flex-col gap-4 md:flex-row">
          <li>
            <router-link
              :to="{ name: 'Home' }"
              class="transition-colors hover:text-orange-300"
              >HOME</router-link
            >
          </li>
          <li>
            <router-link
              :to="{ name: 'Products', params: { category: 'headphones' } }"
              class="transition-colors hover:text-orange-300"
              >HEADPHONES</router-link
            >
          </li>
          <li>
            <router-link
              :to="{ name: 'Products', params: { category: 'speakers' } }"
              class="transition-colors hover:text-orange-300"
              >SPEAKERS</router-link
            >
          </li>
          <li>
            <router-link
              :to="{ name: 'Products', params: { category: 'earphones' } }"
              class="transition-colors hover:text-orange-300"
              >EARPHONES</router-link
            >
          </li>
        </ul>
      </nav>

      <p
        class="text-stone-400 md:col-span-2 md:mb-12 xl:col-span-1 xl:row-[2_/_3]"
      >
        Yudiophile is an all in one stop to fulfill your audio needs. We're a
        small team of music lovers and sound specialists who are devoted to
        helping you get the most out of personal audio. Come and visit our demo
        facility - we’re open 7 days a week.
      </p>

      <p class="text-stone-400">Copyright 2022. All Rights Reserved.</p>

      <a
        href="https://github.com/yuRicky09"
        target="_blank"
        class="flex items-center gap-5 hover:opacity-80 md:justify-self-end xl:row-[2_/_4]"
      >
        <span>YuRicky</span>
        <span>Source Code</span>
        <GithubIcon />
      </a>
    </div>
  </div>
</template>

<script setup>
import GithubIcon from "@/assets/images/svg/github.svg";
</script>
