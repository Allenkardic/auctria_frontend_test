<template>
  <button :class="buttonClasses" @click="handleClick">
    <slot></slot>
  </button>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";

export default defineComponent({
  props: {
    type: {
      type: String as PropType<"primary" | "secondary" | "delete">,
      default: "primary",
    },
    size: {
      type: String as PropType<"small" | "medium" | "large">,
      default: "medium",
    },
    disabled: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    buttonClasses(): string {
      const baseClasses = "py-2 px-4 rounded focus:outline-none";
      const dynamicClasses = {
        "bg-primary text-white": this.type === "primary",
        "bg-secondary text-white": this.type === "secondary",
        "bg-red text-white": this.type === "delete",
        "text-sm": this.size === "small",
        "text-base": this.size === "medium",
        "text-lg": this.size === "large",
        "opacity-50 cursor-not-allowed": this.disabled,
      };

      return [
        baseClasses,
        Object.entries(dynamicClasses)
          .filter(([, value]) => value)
          .map(([key]) => key),
      ].join(" ");
    },
  },
  methods: {
    handleClick() {
      if (!this.disabled) {
        this.$emit("click");
      }
    },
  },
});
</script>

<style scoped>
/* Add any additional styling here */
</style>
