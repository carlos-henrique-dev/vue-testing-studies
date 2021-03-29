<template>
  <form @submit.prevent="submit">
    <textarea v-model="form.description" placeholder="Description" />

    <select v-model="form.city">
      <option value="new-york">New York</option>
      <option value="moscow">Moscow</option>
    </select>

    <label>
      <input type="checkbox" id="checkbox" v-model="form.subscribe" />
      subscribe
    </label>

    <label>
      <input type="radio" value="weekly" v-model="form.interval" />
      weekly
    </label>
    <label>
      <input type="radio" value="monthly" v-model="form.interval" />
      monthly
    </label>

    <input
      type="email"
      v-model="form.email"
      placeholder="Email"
      @blur="handleBlur"
    />

    <button type="submit">Submit</button>
  </form>
</template>

<script>
export default {
  data() {
    return {
      form: {
        email: "",
        description: "",
        city: "",
        subscribe: false,
        interval: "",
      },
    };
  },
  methods: {
    async submit() {
      this.$emit("submit", this.form);
    },
    handleBlur(/* event */) {
      // if (event.relatedTarget?.tagName === "BUTTON") {
      this.$emit("focus-lost");
      // }
    },
  },
};
</script>

<style scoped>
form {
  max-width: 300px;
  height: 300px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
</style>
