<template>
  <div class="bg-gray-50 py-10">
    <div>
      <h3 class="mb-6 text-center uppercase text-orange-450">
        Forgot Password
      </h3>
      <form class="flex flex-col gap-6" @submit="onSubmit">
        <BaseInput name="email" type="email" label="Email Address" />
        <button class="btn">Reset Password</button>
      </form>
      <div class="mt-4 text-center">
        <span>or </span>
        <router-link
          :to="{ name: 'Login' }"
          class="text-orange-450 transition-colors hover:text-orange-300"
          >Login</router-link
        >
      </div>
    </div>
  </div>
</template>

<script setup>
import { string as yupString, object as yupObject } from "yup";
import { useForm } from "vee-validate";
import BaseInput from "@/components/UI/BaseInput.vue";

const formSchema = yupObject({
  email: yupString().required().email(),
});

const { handleSubmit, resetForm } = useForm({
  validationSchema: formSchema,
});

const onSubmit = handleSubmit((value) => {
  console.log(value);
  resetForm();
});
</script>
