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
      <p class="mt-6 text-grey40 text-xs">{{ count }}</p>
    </div>

    <div class="flex justify-center mb-5">
      <Button type="secondary" @click="handleClick">Delete Ticket</Button>
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
    handleClick() {
      // Emit an event with details when the button is clicked
      this.$emit("click");
    },
  },
});
</script>

<style scoped>
/* Add any additional styling here */
</style>
