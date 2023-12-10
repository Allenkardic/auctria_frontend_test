<template>
  <div class="flex items-center mb-4">
    <input
      type="checkbox"
      :id="name"
      :name="name"
      v-model="innerValue"
      class="mr-2 leading-tight" />
    <label :for="name" class="text-grey40 text-sm font-bold">{{ label }}</label>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from "vue";

export default defineComponent({
  props: {
    label: String,
    name: String,
    modelValue: Boolean,
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
