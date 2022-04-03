import { createRouter, createWebHistory } from "vue-router";
import Home from "@/views/Home.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
    meta: {
      title: "Yudiophile | Home",
    },
  },
  {
    path: "/login",
    name: "Login",
    meta: {
      title: "Yudiophile | Login",
    },
    component: () => import("@/views/auth/Login.vue"),
  },
  {
    path: "/signup",
    name: "Signup",
    meta: {
      title: "Yudiophile | Signup",
    },
    component: () => import("@/views/auth/Signup.vue"),
  },
  {
    path: "/forgot-password",
    name: "ForgotPassword",
    meta: {
      title: "Yudiophile | ForgotPassword",
    },
    component: () => import("@/views/auth/ForgotPassword.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    } else {
      return {
        top: 0,
      };
    }
  },
});

router.afterEach((to) => {
  document.title = to.meta.title;
});

export default router;
