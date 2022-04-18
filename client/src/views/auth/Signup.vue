<template>
  <div class="layout !max-w-3xl bg-gray-50 py-10">
    <div>
      <h3 class="mb-6 text-center text-orange-450">CREATE YOUR ACCOUNT!</h3>
      <form class="flex flex-col gap-6" @submit="onSubmit">
        <BaseInput name="name" label="Name" />
        <BaseInput name="email" type="email" label="Email Address" />
        <BaseInput
          name="password"
          label="Password"
          type="password"
          placeholder="At lease 8 characters"
        />
        <BaseInput
          name="confirmPassword"
          label="Confirm Password"
          type="password"
        />
        <button class="btn">Signup</button>
      </form>
      <div class="mt-4 text-center">
        <span>Already have an account? </span>
        <router-link
          :to="{ name: 'Login' }"
          class="text-orange-450 transition-colors hover:text-orange-300"
          >Login</router-link
        >
      </div>
    </div>

    <Teleport to="body">
      <template v-if="showModal">
        <BaseOverlay class="bg-black/30" />
        <BaseModal>
          <template #title>
            <h1 class="font-bold">THANK YOU FOR YOUR ORDER</h1>
          </template>
          <template #content>
            <p>Congratulations, your account has been successfully created.</p>
          </template>
          <template #action>
            <p class="text-orange-450">
              Redurecting to the home page in 2 seconds.
            </p>
          </template>
        </BaseModal>
      </template>
    </Teleport>
  </div>
</template>

<script setup>
import { string as yupString, object as yupObject, ref as yupRef } from "yup";
import { useForm } from "vee-validate";
import { useRouter } from "vue-router";
import { ref } from "vue";
import BaseInput from "@/components/UI/BaseInput.vue";
import BaseModal from "@/components/UI/BaseModal.vue";
import BaseOverlay from "@/components/UI/BaseOverlay.vue";
import api from "@/api";

const showModal = ref(false);
const router = useRouter();
const formSchema = yupObject({
  name: yupString().required(),
  email: yupString().required().email(),
  password: yupString().required().min(8),
  confirmPassword: yupString().oneOf(
    [yupRef("password"), null],
    "Passwords must match"
  ),
});

const { handleSubmit, resetForm } = useForm({
  validationSchema: formSchema,
});

const onSubmit = handleSubmit(async (value) => {
  try {
    const { name, email, password } = value;
    await api.auth.signup({ name, email, password });
    resetForm();
    showModal.value = true;
    setTimeout(() => {
      showModal.value = false;
      router.replace({ name: "Home" });
    }, 2000);
  } catch (err) {
    console.log(err);
  }
});
</script>
