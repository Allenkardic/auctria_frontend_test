import { describe, it, expect, vi } from "vitest";
import { mount, shallowMount } from "@vue/test-utils";
import Home from "../../../src/views/Home.vue"; // Adjust the path to your component
import Vuex from "vuex";
import router from "../../../src/router";

vi.mock("@/router", async () => {
  const actualRouter = await vi.importActual("@/router"); // Adjust the path to your router
  return {
    ...actualRouter,
    push: vi.fn(),
  };
});

describe("ProductPage", () => {
  const store = new Vuex.Store({
    state: {
      products: [],
    },
  });

  it("renders no products message when there are no products", () => {
    const wrapper = shallowMount(Home, {
      global: {
        plugins: [store, router],
      },
    });

    expect(wrapper.text()).toContain("You do not have any product yet");
  });

  it("renders products when available", () => {
    store.state.products = [
      {
        id: 1,
        ticketName: "Test Product",
        description: "Test Description",
        price: 100,
        count: 10,
        isVip: false,
      },
    ];

    const wrapper = shallowMount(Home, {
      global: {
        plugins: [store, router],
      },
    });

    expect(wrapper.findAllComponents({ name: "ProductCard" })).toHaveLength(1);
  });

  it("navigates to admin page when add product button is clicked", async () => {
    const wrapper = mount(Home, {
      global: {
        plugins: [store, router],
      },
    });
  });
});
