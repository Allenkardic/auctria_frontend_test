<template>
  <nav class="text-white p-4 sticky top-0 z-50 border-b border-smokeWhite">
    <div class="container mx-auto flex items-center justify-between">
      <div class="space-x-4">
        <router-link
          to="/"
          class="text-primary text-lg font-bold cursor-pointer"
          active-class="my-custom-active-class"
          >Home</router-link
        >
        <router-link
          to="/admin"
          class="text-primary cursor-pointer"
          active-class="my-custom-active-class"
          >Admin</router-link
        >
      </div>

      <router-link
        to="/cart"
        class="text-primary cursor-pointer"
        active-class="my-custom-active-class"
        >Cart
        <font-awesome-icon icon="shopping-cart" class="text-secondary" />
      </router-link>
    </div>
  </nav>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

export default defineComponent({
  name: "Navbar",
  components: {
    FontAwesomeIcon,
  },
});
</script>

<style scoped>
.router-link-exact-active {
  color: #ff9b00; /* Change color for active link */
  font-weight: bold;
}
</style>
