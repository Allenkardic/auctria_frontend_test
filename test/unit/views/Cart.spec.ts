import { describe, it, expect, vi } from "vitest";
import { shallowMount, mount } from "@vue/test-utils";
import CartPage from "../../../src/views/Cart.vue"; // Adjust the path to your component
import Vuex from "vuex";
import router from "../../../src/router";

vi.mock("@/router", () => ({
  push: vi.fn(),
}));

describe("CartPage", () => {
  const store = new Vuex.Store({
    state: {
      cart: [],
    },
    actions: {
      deleteCart: vi.fn(),
    },
  });

  it("renders no products message when cart is empty", () => {
    const wrapper = shallowMount(CartPage, {
      global: {
        plugins: [store, router],
      },
    });

    expect(wrapper.text()).toContain("You do not have any product in cart yet");
  });

  it("renders products when cart has items", () => {
    store.state.cart = [
      {
        id: "1",
        ticketName: "Test Ticket",
        description: "Test Description",
        price: 100,
        count: 2,
        isVip: false,
      },
    ];

    const wrapper = shallowMount(CartPage, {
      global: {
        plugins: [store, router],
      },
    });

    expect(wrapper.findAllComponents({ name: "CartCard" })).toHaveLength(1);
  });

  it("deletes a product from the cart", async () => {
    store.state.cart = [
      {
        id: "1",
        ticketName: "Test Ticket",
        description: "Test Description",
        price: 100,
        count: 2,
        isVip: false,
      },
    ];

    const wrapper = mount(CartPage, {
      global: {
        plugins: [store, router],
      },
    });

    await wrapper.find("button").trigger("click");
  });
});
