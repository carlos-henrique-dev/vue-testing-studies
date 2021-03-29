<template>
  <nav>
    <a id="profile" href="#">My Profile</a>
    <a v-if="admin" id="admin" href="#">Admin</a>
    <ul v-show="shouldShowDropdown" id="user-dropdown">
      <li>Billing</li>
      <li>Settings</li>
      <li>Logout</li>
    </ul>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      admin: false,
      shouldShowDropdown: false,
    };
  },
};
</script>

<style></style>
