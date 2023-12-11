import { describe, it, expect } from "vitest";
import { shallowMount, mount } from "@vue/test-utils";
import CartCard from "../../../src/components/CartCard.vue"; // Adjust the path to your component

CartCard.components = {
  ...CartCard.components,
  "font-awesome-icon": {
    template: "<span><slot /></span>",
  },
};

describe("CartCard", () => {
  const props = {
    ticketName: "Ticket name",
    description: "This is a test description",
    price: 100,
    count: 5,
    isVip: true,
  };

  it("renders ticket information correctly", () => {
    const wrapper = shallowMount(CartCard, { props });
    expect(wrapper.text()).toContain(props.ticketName);
    expect(wrapper.text()).toContain(props.description);
    expect(wrapper.text()).toContain(`$${props.price}`);
    expect(wrapper.text()).toContain(props.count);
  });

  it("emits an event when delete button is clicked", async () => {
    const wrapper = mount(CartCard, { props });
  });
});
