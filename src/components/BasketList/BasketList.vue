<template>
  <section class="section__basket">
    <ul class="list" v-if="!loading">
      <li class="list_item" v-for="item in list" :key="item.id">
        <BasketItem
          :count="item.rating.count"
          :price="item.price"
          :id="item.id"
          :title="item.title"
          :rating="item.rating.rate"
          :image="item.image"
          @deleteProduct="deleteProduct"
        />
      </li>
    </ul>
    <Loading v-else/>
  </section>
</template>

<script setup lang="ts">

import {useStore} from "vuex";
import {useGetBasket} from "../../hooks/useGetBasket";
import Loading from "../UI/Loading.vue";
import BasketItem from "./BasketItem.vue";

const store = useStore()

const {list, loading} = useGetBasket(store.state.basket.basket)

const deleteProduct = (id:number) =>{
  list.value = list.value.filter(item=> item.id !== id)
}

</script>

<style lang="scss" scoped>

.section__basket {
  display: flex;
  flex-direction: column;
  width: 100%;
}

.list {
  list-style: none;
  padding: 0;
  margin: 0;
  flex: 1 1 auto;

  &_item {
    margin-bottom: 20px;
    border-bottom: 2px solid var(--lightgray);
    padding: 10px;
  }
}

</style>