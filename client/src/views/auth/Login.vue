<template>
  <div class="layout !max-w-3xl bg-gray-50 py-10 md:py-20">
    <div>
      <h3 class="mb-6 text-center text-orange-450">LOGIN</h3>
      <form class="flex flex-col gap-6" @submit="onSubmit">
        <BaseInput name="email" type="email" label="Email Address" />
        <BaseInput
          name="password"
          label="Password"
          type="password"
          placeholder="At lease 8 characters"
        />
        <button class="btn">login</button>
      </form>
      <div class="mt-4 text-center">
        <div>
          <span> or </span>
          <router-link
            :to="{ name: 'ForgotPassword' }"
            class="text-orange-450 transition-colors hover:text-orange-300"
            >Forgot password</router-link
          >
        </div>
        <div>
          <span class="mt-4 text-center"> Don't have an account? </span>
          <router-link
            :to="{ name: 'Signup' }"
            class="text-orange-450 transition-colors hover:text-orange-300"
            >Sign up</router-link
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useForm } from "vee-validate";
import { object as yupObject, string as yupString } from "yup";
import BaseInput from "@/components/UI/BaseInput.vue";

const formSchema = yupObject({
  email: yupString().required().email(),
  password: yupString().required().min(8),
});

const { handleSubmit, resetForm } = useForm({
  validationSchema: formSchema,
});

const onSubmit = handleSubmit((value) => {
  console.log(value);
  resetForm();
});
</script>
