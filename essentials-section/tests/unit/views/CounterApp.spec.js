import { mount } from "@vue/test-utils";
import CounterApp from "../../../src/views/CounterApp.vue";

describe("CounterApp.vue", () => {
  it("Emits an event when clicked", () => {
    const wrapper = mount(CounterApp);

    wrapper.find("button").trigger("click");
    wrapper.find("button").trigger("click");

    const incrementEvent = wrapper.emitted("increment");

    expect(incrementEvent).toHaveLength(2);

    expect(incrementEvent[0]).toEqual([{ count: 1, isEven: false }]);

    expect(incrementEvent[1]).toEqual([{ count: 2, isEven: true }]);
  });

  it("Increments the counter display", async () => {
    const wrapper = mount(CounterApp);

    await wrapper.find("button").trigger("click");
    await wrapper.find("button").trigger("click");

    expect(wrapper.get('[data-test="counter"]').text()).toEqual("Counter: 2");
  });
});
