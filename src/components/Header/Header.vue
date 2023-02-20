<template>
  <header class="header">
    <div class="container">
      <nav class="header_wrapper">
        <router-link class="logo" to="/">Store</router-link>
        <router-link v-if="!store.state.user.auth" to="/auth">
          <svg width="30px" height="30px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M14 4L17.5 4C20.5577 4 20.5 8 20.5 12C20.5 16 20.5577 20 17.5 20H14M15 12L3 12M15 12L11 16M15 12L11 8" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </router-link>
        <UserMenu v-else/>
      </nav>
    </div>
  </header>
</template>

<script setup lang="ts">
import {useStore} from "vuex";
import UserMenu from "./UserMenu.vue";

const store = useStore()
</script>

<style lang="scss" scoped>

.header {
  background-color: var(--main-color);
  height: 50px;
  display: flex;
  align-items: center;
  &_wrapper {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
}

.logo {
  color: white;
  font-size: 30px;
  text-decoration: none;
  font-weight: bold;
}

</style>