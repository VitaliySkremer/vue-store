<template>
  <button @click="click" class="link">
    Выйти
  </button>
</template>

<script setup lang="ts">

import {useStore} from "vuex";
import router from "../../router/router";

const store = useStore();
const click = () =>{
  store.commit('user/outAuth')
  router.push('/auth')
}

</script>

<style lang="scss" scoped>

.link {
  width: 100%;
  background-color: transparent;
  color: var(--main-color);
  text-decoration: none;
  display: block;
  padding: 10px;
  border: none;
  border-bottom: 2px solid var(--lightgray);
  transition: background-color .2s ease;

  &:hover {
    background-color: rgba(128, 44, 110,.2);
  }

  &:not(last-child){
    margin-bottom: 5px;
  }
}

</style>