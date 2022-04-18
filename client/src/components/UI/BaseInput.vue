<template>
  <div>
    <label :for="name">{{ label }}</label>
    <input
      :id="name"
      :value="inputValue"
      :type="type"
      :placeholder="placeholder"
      class="mt-2 block w-full border-2 outline-none ring-0 transition-colors placeholder:text-sm focus:border-[2px] focus:border-orange-300 focus:ring-0"
      :class="{ 'border-rose-500': errorMessage }"
      autocomplete="false"
      v-on="validationListeners"
    />
    <small v-if="errorMessage" class="text-rose-500">{{ errorMessage }}</small>
  </div>
</template>

<script setup>
import { useField } from "vee-validate";
import { computed } from "vue";

const props = defineProps({
  name: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    default: "text",
  },
  label: {
    type: String,
    required: true,
  },
  placeholder: {
    type: String,
    default: "",
  },
  initialValue: {
    type: String,
    default: "",
  },
});

const {
  value: inputValue,
  errorMessage,
  handleChange,
} = useField(props.name, undefined, {
  initialValue: props.initialValue,
  validateOnValueUpdate: false,
});

const validationListeners = computed(() => {
  // lazy
  if (!errorMessage.value) {
    return {
      blur: handleChange,
      change: handleChange,
      input: (e) => handleChange(e, false),
    };
  }
  // Aggressive
  return {
    blur: handleChange,
    change: handleChange,
    input: handleChange,
  };
});
</script>
