import { describe, it, expect, vi } from "vitest";
import { shallowMount } from "@vue/test-utils";
import { createRouter, createWebHistory } from "vue-router";
import Navbar from "../../../src/components/Navbar.vue";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import Home from "../../../src/views/Home.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/", name: "Home", component: Home },
    {
      path: "/admin",
      name: "Admin",
      component: () => import("../../../src/views/Admin.vue"),
    },
    {
      path: "/cart",
      name: "Cart",
      component: () => import("../../../src/views/Cart.vue"),
    },
  ],
});

vi.mock("@fortawesome/vue-fontawesome", () => ({
  FontAwesomeIcon: {
    template: "<div></div>",
  },
}));

describe("Navbar", () => {
  it("renders router links", () => {
    const wrapper = shallowMount(Navbar, {
      global: {
        plugins: [router],
        stubs: {
          FontAwesomeIcon,
        },
      },
    });

    expect(wrapper.find('[data-testid="home-link"]').exists()).toBe(true);
    expect(wrapper.find('[data-testid="admin-link"]').exists()).toBe(true);
    expect(wrapper.find('[data-testid="cart-link"]').exists()).toBe(true);
  });
});
