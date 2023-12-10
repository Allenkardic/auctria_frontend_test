<template>
  <div class="mb-4">
    <label class="block text-gray-700 font-bold">
      {{ label }}
      <input
        type="checkbox"
        class="form-checkbox h-5 w-5 text-indigo-600"
        :checked="value"
        @input="$emit('input', !value)" />
    </label>
  </div>
</template>

<script lang="ts">
export default {
  props: {
    label: String,
    value: Boolean,
  },
};
</script>
