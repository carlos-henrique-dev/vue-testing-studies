import { mount } from "@vue/test-utils";
import Greetings from "@/components/Greetings.vue";

describe("Greetings.vue", () => {
  it("Renders a greeting message when show is true", async () => {
    const wrapper = mount(Greetings);

    expect(wrapper.html()).toContain("Hello");

    await wrapper.setProps({ show: false });

    expect(wrapper.html()).not.toContain("Hello");
  });
});
