import { mount } from "@vue/test-utils";
import Nav from "../../../src/components/Nav.vue";

describe("Nav.vue", () => {
  it("Renders a profile link", () => {
    const wrapper = mount(Nav);

    const profileLink = wrapper.get("#profile");

    expect(profileLink.text()).toEqual("My Profile");
  });

  it("Does not render an admin link", () => {
    const wrapper = mount(Nav);

    expect(wrapper.find("#admin").exists()).toBe(false);
  });

  it("Renders an admin link", () => {
    const wrapper = mount(Nav, {
      data() {
        return {
          admin: true,
        };
      },
    });

    expect(wrapper.get("#admin").text()).toEqual("Admin");
  });

  it("Does not show the user dropdown", () => {
    const wrapper = mount(Nav);

    expect(wrapper.get("#user-dropdown").isVisible()).toBe(false);
  });
});
