<template>
  <div class="main-container">
    <AccountStatusBar />
    <RouterView />
    <footer>Footer</footer>
  </div>
</template>

<script setup lang="ts">
import { RouterLink, RouterView } from "vue-router";
import AccountStatusBarVue from "./components/AccountStatusBar.vue";
import AccountStatusBar from "./components/AccountStatusBar.vue";
</script>

<style>
@import "@/assets/base.css";

.main-container {
  margin: 0 auto;
  min-width: 360px;
  max-width: 600px;
}
</style>