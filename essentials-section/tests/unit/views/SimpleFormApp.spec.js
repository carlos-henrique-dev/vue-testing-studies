import { mount } from "@vue/test-utils";
import SimpleFormApp from "../../../src/views/SimpleFormApp.vue";

describe("SimpleFormApp.Vue", () => {
  it("Emits the input to its parent", async () => {
    const wrapper = mount(SimpleFormApp);

    await wrapper.find("input").setValue("my@mail.com");

    await wrapper.find("button").trigger("click");

    expect(wrapper.emitted("submit")[0][0]).toBe("my@mail.com");
  });
});
