<template>
  <div class="product">
    <img class="img" :src="props.image" alt="logo">
    <div class="main__block">
      <router-link :to="'/product/'+props.id" class="title__price">{{props.title}}</router-link>
      <p>Осталось в наличии: {{props.count}} шт.</p>
      <Button @click="deleteProduct" class="buy__button">
        удалить
      </Button>
    </div>
    <div>
      <p class="title__price">{{props.price.toLocaleString('en-US',{ style: 'currency', currency: 'USD' })}}</p>
      <p class="rating">{{props.rating}}</p>
    </div>
  </div>
</template>

<script setup lang="ts">

import Button from "../UI/Button.vue";
import {useStore} from "vuex";

const props = defineProps<{
  id:number,
  title:string;
  image:string;
  price:number;
  rating:number;
  count:number;
}>()

const store = useStore();
const emmit = defineEmits<{
  (e:"deleteProduct", id:number):void
}>()

const deleteProduct = () =>{
  store.commit('basket/deleteOutBasket',props.id)
  emmit('deleteProduct',props.id);
}

</script>

<style lang="scss" scoped>

.product {
  display: flex;
}

.img {
  height: 200px;
  width: 150px;
  object-fit: cover;
  margin-right: 25px;
}

.main__block {
  flex: 1 1 auto;
  display: flex;
  flex-direction: column;
}

.buy__button {
  width: fit-content;
  margin-top: auto;
}

.title__price {
  font-size: 24px;
  font-weight: bold;
  margin: 0;
  color: black;
  text-decoration: none;
}

.rating {
  color: var(--gold);
  font-size: 18px;
}

</style>