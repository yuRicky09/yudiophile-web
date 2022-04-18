<template>
  <div class="hidden h-16 md:flex md:items-center md:justify-between">
    <router-link
      class="transition-colors hover:text-orange-300"
      :to="{ name: 'Home' }"
    >
      <h1 class="font-bold md:text-xl xl:text-2xl">yudiophile</h1>
    </router-link>
    <nav>
      <ul class="flex gap-8">
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
    <div class="flex gap-4">
      <ul class="flex gap-4">
        <li>
          <router-link
            :to="{ name: 'Login' }"
            class="transition-colors hover:text-orange-300"
            >LOGIN</router-link
          >
        </li>
        <li>
          <router-link
            :to="{ name: 'Signup' }"
            class="transition-colors hover:text-orange-300"
            >SIGNUP</router-link
          >
        </li>
      </ul>
      <router-link to="#" class="transition-colors hover:text-orange-300">
        <CartIcon />
      </router-link>
      <router-link to="#" class="transition-colors hover:text-orange-300">
        <UserIcon />
      </router-link>
    </div>
  </div>
</template>

<script setup>
import CartIcon from "@/assets/images/svg/cart.svg";
import UserIcon from "@/assets/images/svg/user.svg";
</script>
