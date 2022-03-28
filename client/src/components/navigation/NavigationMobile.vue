<template>
  <div
    class="relative z-20 flex h-16 items-center justify-between px-4 md:hidden"
  >
    <MenuIcon
      v-show="!isOpen"
      class="cursor-pointer"
      @click="isOpen = !isOpen"
    />
    <CloseIcon
      v-show="isOpen"
      class="cursor-pointer"
      @click="isOpen = !isOpen"
    />
    <router-link :to="{ name: 'Home' }">
      <h1 class="font-bold">yudiophile</h1>
    </router-link>
    <div class="flex items-center gap-2">
      <UserIcon class="cursor-pointer" />
      <CartIcon class="cursor-pointer" />
    </div>

    <Transition
      enter-active-class="animate-scale-from-top"
      leave-active-class="animate-scale-from-top-reverse"
    >
      <nav
        v-show="isOpen"
        class="absolute top-full left-0 w-full origin-top rounded-b-2xl bg-white py-8 text-center text-black"
      >
        <ul class="flex flex-col text-lg" @click="closeMenu">
          <li>
            <router-link :to="{ name: 'Login' }" class="block py-4"
              >LOGIN</router-link
            >
          </li>
          <li>
            <router-link :to="{ name: 'Signup' }" class="block py-4"
              >SIGNUP</router-link
            >
          </li>
          <li>
            <router-link to="#" class="block py-4">HEADPHONES</router-link>
          </li>
          <li>
            <router-link to="#" class="block py-4">SPEAKERS</router-link>
          </li>
          <li>
            <router-link to="#" class="block py-4">EARPHONES</router-link>
          </li>
          <li ref="logoutEl" class="py-4">LOGOUT</li>
        </ul>
      </nav>
    </Transition>
  </div>
  <BaseOverlay v-show="isOpen" @click="isOpen = false" />
</template>

<script setup>
import MenuIcon from "@/assets/images/svg/menu.svg";
import CartIcon from "@/assets/images/svg/cart.svg";
import CloseIcon from "@/assets/images/svg/x.svg";
import UserIcon from "@/assets/images/svg/user.svg";
import BaseOverlay from "@/components/UI/BaseOverlay.vue";
import { ref } from "vue";

const isOpen = ref(false);
const logoutEl = ref(null);

const closeMenu = function (e) {
  if (e.target === logoutEl.value) return;

  isOpen.value = false;
};
</script>
