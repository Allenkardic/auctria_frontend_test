<template>
  <div class="mb-4">
    <label :for="name" class="block text-grey40 text-sm font-bold mb-2">{{
      label
    }}</label>
    <input
      :type="type"
      :id="name"
      :name="name"
      v-model="innerValue"
      :class="[
        'shadow',
        'appearance-none',
        'border',
        'rounded',
        'w-full',
        'py-2',
        'px-3',
        'text-grey80',
        'leading-tight',
        { 'border-red': error },
      ]"
      :placeholder="placeholder" />
    <span class="text-red text-xs italic" v-if="error">{{ error }}</span>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType, computed } from "vue";

export default defineComponent({
  props: {
    label: String,
    name: {
      type: String,
      required: true,
    },
    type: {
      type: String as PropType<"text" | "number" | "email" | "password">,
      default: "text",
    },
    modelValue: {
      type: [String, Number],
      default: "",
    },
    placeholder: String,
    error: String,
  },
  emits: ["update:modelValue"],
  setup(props, { emit }) {
    const innerValue = computed({
      get: () => props.modelValue,
      set: (value) => emit("update:modelValue", value),
    });

    return { innerValue };
  },
});
</script>
