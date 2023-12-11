<template>
  <div class="m-5 md:m-10">
    <div
      v-if="products.length > 1"
      class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
      <div v-for="product in products" :key="product.id">
        <ProductCard
          @click="handleAddToCart(product)"
          :ticketName="product.ticketName"
          :description="product.description"
          :price="product.price"
          :count="product.count"
          :isVip="product.isVip" />
      </div>
    </div>
    <div v-else class="flex items-center justify-center mt-60">
      <div>
        <div class="text-grey40">
          You do not have any product yet, click on the add button to create
          product
        </div>
        <div class="flex items-center justify-center mt-10">
          <Button type="secondary" @click="handleOnclickAddProduct">
            Add Product
          </Button>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from "vue";
import { useStore } from "vuex";
import ProductCard from "../components/ProductCard.vue";
import Button from "../components/Button.vue";
import router from "../router";

export default defineComponent({
  components: {
    ProductCard,
    Button,
  },
  setup() {
    const store = useStore();

    const products = computed(() => store.state.products);

    const handleOnclickAddProduct = () => {
      router.push("admin");
    };

    const handleAddToCart = async (product: any) => {
      await store.dispatch("addToCart", product);
      router.push("cart");
    };

    return {
      products,
      handleOnclickAddProduct,
      handleAddToCart,
    };
  },
});
</script>

<style>
/* Add any global styling here */
</style>
