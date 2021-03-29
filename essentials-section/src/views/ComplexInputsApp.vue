<template>
  <custom-input v-model="input" label="Text Input" class="text-input" />
</template>

<script>
import CustomInput from "../components/CustomInput.vue";
export default {
  name: "CustomInputApp",
  components: { CustomInput },
  data() {
    return { input: "" };
  },
};
</script>
