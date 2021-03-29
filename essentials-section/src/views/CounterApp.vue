<template>
  <div>
    <div data-test="counter">Counter: {{ count }}</div>
    <button @click="handleClick">Increment</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      count: 0,
    };
  },

  methods: {
    handleClick() {
      this.count += 1;
      this.$emit("increment", {
        count: this.count,
        isEven: this.count % 2 === 0,
      });
    },
  },
};
</script>
