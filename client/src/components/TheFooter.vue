<template>
  <div class="bg-zinc-900">
    <div
      class="mx-auto grid max-w-8xl grid-cols-1 justify-items-center gap-y-8 py-10 text-center text-white"
    >
      <router-link :to="{ name: 'Home' }"
        ><h2 class="text-2xl font-extrabold">yudiophile</h2></router-link
      >

      <nav>
        <ul class="flex flex-col gap-4">
          <li>
            <router-link :to="{ name: 'Home' }">HOME</router-link>
          </li>
          <li>
            <router-link to="">HEADPHONES</router-link>
          </li>
          <li>
            <router-link to="">SPEAKERS</router-link>
          </li>
          <li>
            <router-link to="">EARPHONES</router-link>
          </li>
        </ul>
      </nav>

      <p class="text-stone-400">
        Yudiophile is an all in one stop to fulfill your audio needs. We're a
        small team of music lovers and sound specialists who are devoted to
        helping you get the most out of personal audio. Come and visit our demo
        facility - we’re open 7 days a week.
      </p>

      <p class="text-stone-400">Copyright 2022. All Rights Reserved.</p>

      <a
        href="https://github.com/yuRicky09"
        target="_blank"
        class="flex items-center gap-5 hover:opacity-80"
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
