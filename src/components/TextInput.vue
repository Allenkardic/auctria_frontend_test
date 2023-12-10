<template>
  <div class="mb-4">
    <label :for="name" class="block text-gray-700 text-sm font-bold mb-2">{{
      label
    }}</label>
    <input
      :type="type"
      :id="name"
      :name="name"
      v-model="inputValue"
      :class="{ 'border-red-500': error }"
      :placeholder="placeholder"
      class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight" />
    <span class="text-red-500 text-xs italic" v-if="error">{{ error }}</span>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  props: {
    label: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    type: {
      type: String,
      required: false,
      default: "text",
    },
    error: {
      type: String,
      required: false,
    },
    placeholder: {
      type: String,
      required: false,
    },
    modelValue: {
      type: [String, Number],
      required: false,
    },
  },
  emits: ["update:modelValue"],
  setup(props, { emit }) {
    const inputValue = props.modelValue;

    return {
      inputValue,
      updateValue: (value: string | number) => emit("update:modelValue", value),
    };
  },
  watch: {
    inputValue(newVal) {
      this.updateValue(newVal);
    },
  },
});
</script>
