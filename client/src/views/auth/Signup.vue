<template>
  <div class="bg-gray-50 py-10">
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
  </div>
</template>

<script setup>
import { string as yupString, object as yupObject, ref as yupRef } from "yup";
import { useForm } from "vee-validate";
import BaseInput from "@/components/UI/BaseInput.vue";

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

const onSubmit = handleSubmit((value) => {
  console.log(value);
  resetForm();
});
</script>
