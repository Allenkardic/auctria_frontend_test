<!-- src/App.vue -->

<template>
  <div id="app">
    <Navbar />
    <router-view></router-view>
  </div>
</template>

<script lang="ts">
import Navbar from "./components/Navbar.vue";

export default {
  name: "App",
  components: {
    Navbar,
  },
};
</script>

<style>
/* Add any global styling here */
</style>
