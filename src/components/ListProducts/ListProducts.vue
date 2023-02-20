<template>
  <section class="section__list">
    <ul class="list" v-if="!loading">
      <li class="list_item" v-for="product in list" :key="product.id">
        <Card class="card">
          <Product
              :img="product.image"
              :price="product.price"
              :rating="product.rating.rate"
              :title="product.title"
          />
        </Card>
      </li>
    </ul>
    <Loading class="loading" v-else/>
  </section>
</template>

<script setup lang="ts">

import {useProducts} from "../../hooks/useProducts";
import { useStore} from "vuex";
import Card from "../UI/Card.vue";
import Loading from "../UI/Loading.vue";
import Product from "./Product.vue";

const store = useStore()
const {list, loading, getProducts} = useProducts(store.state.categories.activeCategories)

store.watch(state => state.categories.activeCategories,
    (newValue)=>{
  console.log(newValue)
      getProducts(newValue)
    })


</script>

<style lang="scss" scoped>

.section__list {
  padding: 30px 0;
  flex: 1 1 auto;
  display: flex;
}

.card {
  height: 350px;
}

.list {
  display: flex;
  flex-wrap: wrap;
  list-style: none;
  padding: 0;
  margin: 0;

  &_item {
    width: calc((100%/4) - 30px);
    margin: 15px;
  }
}

.loading {
  align-self: center;
}

</style>