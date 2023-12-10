<!-- src/App.vue -->

<template>
  <div class="m-5 md:m-10">
    <div
      class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
      <div v-for="product in products" :key="product.id">
        <ProductCard
          :name="product.name"
          :description="product.description"
          :amount="product.amount"
          :availableQuantity="product.availableQuantity"
          :isVip="product.isVip" />
      </div>
    </div>
    <div class="text-red">hello world dhfhh</div>
    <div class="text-red">hello world dhfhh</div>
    <div class="text-red">hello world dhfhh</div>
    <div class="text-red">hello world dhfhh</div>
    <div class="text-red">hello world dhfhh</div>
    <div class="text-red">hello world dhfhh</div>
  </div>
</template>

<script lang="ts">
import ProductCard from "../components/ProductCard.vue";

export default {
  components: {
    ProductCard,
  },
  data() {
    return {
      products: [
        {
          id: "1",
          name: "Product 1",
          description: "Description for Product 1",
          amount: 19.99,
          availableQuantity: 10,
          isVip: true,
        },
        {
          id: "2",
          name: "Product 2",
          description: "Description for Product 2",
          amount: 29.99,
          availableQuantity: 5,
          isVip: true,
        },
        {
          id: "3",
          name: "Product 2",
          description: "Description for Product 2",
          amount: 29.99,
          availableQuantity: 5,
          isVip: true,
        },
        {
          id: "4",
          name: "Product 2",
          description: "Description for Product 2",
          amount: 29.99,
          availableQuantity: 5,
          isVip: false,
        },
        {
          id: "5",
          name: "Product 2",
          description: "Description for Product 2",
          amount: 29.99,
          availableQuantity: 5,
          isVip: false,
        },
        {
          id: "6",
          name: "Product 2",
          description: "Description for Product 2",
          amount: 29.99,
          availableQuantity: 5,
          isVip: true,
        },
        {
          id: "7",
          name: "Product 2",
          description: "Description for Product 2",
          amount: 29.99,
          availableQuantity: 5,
          isVip: false,
        },
        {
          id: "8",
          name: "Product 2",
          description: "Description for Product 2",
          amount: 29.99,
          availableQuantity: 5,
          isVip: false,
        },
        // Add more products as needed
      ],
    };
  },
};
</script>

<style>
/* Add any global styling here */
</style>
