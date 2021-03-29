import { mount } from "@vue/test-utils";
import ComplexInputsApp from "../../../src/views/ComplexInputsApp.vue";

describe("CustomInputsApp.vue", () => {
  it("Update parent input value on children", async () => {
    const wrapper = mount(ComplexInputsApp);

    const element = wrapper.find(".text-input input");
    await element.setValue("test text");

    expect(wrapper.vm.input).toEqual("test text");
  });
});
