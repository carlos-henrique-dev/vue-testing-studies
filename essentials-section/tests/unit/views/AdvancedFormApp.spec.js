import { mount } from "@vue/test-utils";
import AdvancedFormApp from "../../../src/views/AdvancedFormApp.vue";

describe("AdvancedFormApp.vue", () => {
  it("Submits a form", async () => {
    const wrapper = mount(AdvancedFormApp);

    const email = "name@mail.com";
    const description = "Lorem ipsum dolor sit amet";
    const city = "moscow";

    await wrapper.find("input[type=email]").setValue(email);
    await wrapper.find("textarea").setValue(description);
    await wrapper.find("select").setValue(city);
    await wrapper.find("input[type=checkbox]").setValue();
    await wrapper.find("input[type=radio][value=monthly]").setValue();

    await wrapper.find("form").trigger("submit.prevent");

    expect(wrapper.emitted("submit")[0][0]).toStrictEqual({
      email,
      description,
      city,
      subscribe: true,
      interval: "monthly",
    });
  });

  it("emits an event only if you lose focus to a button", () => {
    const wrapper = mount(AdvancedFormApp);

    wrapper.find("input[type=email]").trigger("blur");

    expect(wrapper.emitted("focus-lost")).toBeTruthy();
  });
});
