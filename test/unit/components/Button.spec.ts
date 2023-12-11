import { shallowMount } from "@vue/test-utils";
import Button from "../../../src/components/Button.vue"; // Update the path according to your project structure

describe("Button", () => {
  it("renders slot content", () => {
    const wrapper = shallowMount(Button, {
      slots: {
        default: "Click me",
      },
    });
    expect(wrapper.text()).toContain("Click me");
  });

  it("emits click event when not disabled", async () => {
    const wrapper = shallowMount(Button);
    await wrapper.trigger("click");
    expect(wrapper.emitted("click")).toBeTruthy();
  });
});
