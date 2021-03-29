<template>
  <div>
    <input v-model="password" />
    <div v-if="error">{{ error }}</div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      password: "",
    };
  },
  props: {
    minLength: {
      type: Number,
    },
    maxLength: {
      type: Number,
    },
  },
  computed: {
    error() {
      if (this.password.length < this.minLength) {
        return `Password must be at least ${this.minLength} characters.`;
      }
      if (this.password.length > this.maxLength) {
        return `Password cant be more than ${this.maxLength} characters.`;
      }
      return false;
    },
  },
};
</script>
