<!-- src/components/ProductCard.vue -->

<template>
  <div
    class="bg-white overflow-hidden border border-1 border-smokeWhite rounded">
    <div class="p-5">
      <div class="w-full flex flex-row justify-between">
        <div class="uppercase tracking-wide text-sm text-grey80 font-semibold">
          {{ ticketName }}
        </div>
        <div v-show="isVip">
          <font-awesome-icon icon="star" class="text-secondary" />
        </div>
      </div>
      <p class="mt-2 text-primary text-xl font-bold">
        ${{ parseFloat(price) }}
      </p>
      <p class="mt-6 text-grey40 text-xs">{{ description }}</p>
      <div class="mt-4 flex items-center">
        <div class="flex items-center">
          <button
            @click="decreaseQuantity"
            class="text-gray-500 focus:outline-none border border-solid border-grey20 rounded">
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
          <span class="mx-3 text-grey80">{{ quantity }}</span>
          <button
            @click="increaseQuantity"
            class="text-gray-500 focus:outline-none border border-solid border-grey20 rounded">
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

    <div class="flex justify-center mb-5">
      <Button type="secondary" @click="handlePrimaryButtonClick"
        >Add to cart</Button
      >
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Button from "../components/Button.vue";

export default defineComponent({
  components: {
    Button,
  },
  props: {
    ticketName: String,
    description: String,
    price: Number,
    count: Number,
    isVip: Boolean,
  },

  data() {
    return {
      quantity: 1,
    };
  },
  methods: {
    increaseQuantity() {
      const { quantity, $props } = this;
      if (quantity < $props?.count) {
        this.quantity++;
      }
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
