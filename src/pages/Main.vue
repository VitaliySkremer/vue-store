<template>
  <div class="main">
    <ListCategories/>
    <ListProducts/>
  </div>
</template>

<script setup lang="ts">
import ListCategories from "../components/ListCategories/ListCategories.vue";
import ListProducts from "../components/ListProducts/ListProducts.vue";
</script>

<style scoped>

.main {
  padding-top: 30px;
  padding-bottom: 30px;
  height: 100%;
  display: flex;
  flex-direction: column;
}

</style>