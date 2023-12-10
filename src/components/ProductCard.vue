<!-- src/components/ProductCard.vue -->

<template>
  <div class="max-w-md mx-auto bg-white shadow-md overflow-hidden md:max-w-2xl">
    <div class="md:flex">
      <div class="md:flex-shrink-0">
        <img
          class="h-48 w-full object-cover md:w-48"
          :src="image"
          alt="Product Image" />
      </div>
      <div class="p-8">
        <div
          class="uppercase tracking-wide text-sm text-indigo-500 font-semibold">
          {{ name }}
        </div>
        <p class="mt-2 text-gray-500">{{ description }}</p>
        <p class="mt-2 text-gray-700">Amount: ${{ amount.toFixed(2) }}</p>

        <div class="mt-4 flex items-center">
          <div class="flex items-center">
            <button
              @click="decreaseQuantity"
              class="text-gray-500 focus:outline-none">
              <svg
                class="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg">
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M20 12H4"></path>
              </svg>
            </button>
            <span class="mx-2">{{ quantity }}</span>
            <button
              @click="increaseQuantity"
              class="text-gray-500 focus:outline-none">
              <svg
                class="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg">
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  props: {
    name: String,
    description: String,
    amount: Number,
    image: String,
  },
  data() {
    return {
      quantity: 1,
    };
  },
  methods: {
    increaseQuantity() {
      this.quantity++;
    },
    decreaseQuantity() {
      if (this.quantity > 1) {
        this.quantity--;
      }
    },
  },
});
</script>

<style scoped>
/* Add any additional styling here */
</style>
