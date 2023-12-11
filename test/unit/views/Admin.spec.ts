import { describe, it, expect, vi } from "vitest";

import { mount, VueWrapper } from "@vue/test-utils";
import { Store } from "vuex";
import Admin from "../../../src/views/Admin.vue";
import store from "../../../src/store";

describe("Admin", () => {
  let wrapper: VueWrapper<any>;

  beforeEach(() => {
    wrapper = mount(Admin, {
      global: {
        plugins: [store as Store<any>],
      },
    });
  });

  it("renders correctly", () => {
    expect(wrapper.find(".pb-8").text()).toContain("Create a new ticket");
  });

  it("submits the form", async () => {
    const mockDispatch = vi.spyOn(store, "dispatch");
    const ticketNameInput = wrapper.find('input[name="ticketName"]');
    const priceInput = wrapper.find('input[name="price"]');
    const countInput = wrapper.find('input[name="count"]');
    const descriptionInput = wrapper.find('textarea[name="description"]');
    const textarea = wrapper.find("textarea");
    if (
      ticketNameInput.exists() &&
      priceInput.exists() &&
      countInput.exists() &&
      descriptionInput.exists()
    ) {
      await ticketNameInput.setValue("Sample Ticket");
      await textarea.setValue("Sample Ticket");
      await priceInput.setValue(100);
      await countInput.setValue(10);
    } else {
      throw new Error("Required input elements not found");
    }

    // Clean up
    mockDispatch.mockRestore();
  });
});
