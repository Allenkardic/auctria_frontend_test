<template>
  <div class="mb-4">
    <label :for="id" class="block text-gray-700 font-bold">{{ label }}</label>
    <input
      :id="id"
      :type="inputType"
      class="border rounded p-2 w-full"
      :value="value"
      @input="$emit('input', $event)" />
    <span v-if="error" class="text-red-600">{{ error }}</span>
  </div>
</template>

<script lang="ts">
export default {
  props: {
    id: String,
    label: String,
    inputType: String, // Specify "number" or "text" for input type
    value: [String, Number], // Allow both string and number values
    error: String,
  },
};
</script>
