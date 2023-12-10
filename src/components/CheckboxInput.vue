<template>
  <div class="mb-4 flex items-center">
    <input
      :type="type"
      :id="name"
      :name="name"
      v-model="inputValue"
      class="mr-2 leading-tight" />
    <label :for="name" class="text-gray-700 text-sm font-bold">{{
      label
    }}</label>
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
      default: "checkbox",
    },
    modelValue: {
      type: Boolean,
      required: false,
    },
  },
  emits: ["update:modelValue"],
  setup(props, { emit }) {
    const inputValue = props.modelValue;

    return {
      inputValue,
      updateValue: (value: boolean) => emit("update:modelValue", value),
    };
  },
  watch: {
    inputValue(newVal) {
      this.updateValue(newVal);
    },
  },
});
</script>
