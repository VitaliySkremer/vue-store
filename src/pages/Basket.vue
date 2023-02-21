<template>
  <div class="basket">
    <BasketList/>
    <BasketBuy/>
  </div>
</template>

<script setup lang="ts">
import BasketList from "../components/BasketList/BasketList.vue";
import BasketBuy from "../components/BasketBuy/BasketBuy.vue";
</script>

<style scoped>

.basket {
  display: flex;
  height: 100%;
  padding: 30px 0;
}

</style>