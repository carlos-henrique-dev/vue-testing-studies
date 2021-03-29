import { mount } from "@vue/test-utils";
import PasswordInput from "@/components/PasswordInput.vue";

describe("PasswordInput.vue", () => {
  it("Renders an error if length is too short", () => {
    const wrapper = mount(PasswordInput, {
      props: {
        minLength: 10,
      },
      data() {
        return {
          password: "short",
        };
      },
    });

    expect(wrapper.html()).toContain("Password must be at least 10 characters");
  });

  it("Renders an error if length is too long", () => {
    const wrapper = mount(PasswordInput, {
      props: {
        maxLength: 15,
      },
      data() {
        return {
          password: "ReallyBigAndLongPassword",
        };
      },
    });

    expect(wrapper.html()).toContain("Password cant be more than 15 characters");
  });
});
