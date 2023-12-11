import { defineConfig } from "vitest/config";
import vue from "@vitejs/plugin-vue";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  test: {
    environment: "jsdom",
    // Test specific configurations...
    globals: true, // Enables global test functions like `describe` and `it`
  },
});
