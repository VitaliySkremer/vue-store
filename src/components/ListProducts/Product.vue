<template>
  <div class="product">
    <img class="img" :src="props.img" loading="lazy" :alt="props.price">
    <p class="title">{{props.title}}</p>
    <div class="more">
      <Button @click="$router.push(`/product/${props.id}`)" class="link">Подробнее</Button>
      <div>
        <span class="price">{{props.price.toLocaleString('en-US',{ style: 'currency', currency: 'USD' })}}</span>
        <span class="rating">{{props.rating}}</span>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">

import Button from "../UI/Button.vue";

const props = defineProps<{
  id:number;
  title: string;
  img: string;
  rating:number;
  price:number
}>()
</script>

<style scoped>

.product {
  display: flex;
  flex-direction: column;
  height: 100%;
}

.more {
  margin-top: auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.img {
  width: 100%;
  object-fit: cover;
  height: 200px;
}

.price {
  margin-right: 10px;
}

.rating {
  color: var(--gold);
}

.link {
  font-size: 14px;
}

</style>