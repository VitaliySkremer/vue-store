<template>
  <section class="product__block">
    <div class="info__wrapper" v-if="!loading">
      <p class="title">{{product?.title}}</p>
      <div class="info">
        <img class="img" :src="product?.image" alt="product">
        <div class="table__wrapper">
          <TableCharacter
            :price="product?.price"
            :category="product?.category"
            :count="product?.rating.count"
            :rate="product?.rating.rate"
          />
          <div>
            <Button @click="addProductInBasket(product?.id)" class="btn__add-basket">
              {{store.state.basket.basket.includes(product?.id)? 'Убрать из корзины':'Добавить в корзину'}}
            </Button>

            <Button>
              Купить онлайн
            </Button>
          </div>
        </div>
      </div>
      <p class="description">{{product?.description}}</p>
    </div>
    <Loading v-else/>
  </section>
</template>

<script setup lang="ts">

import {useGetProduct} from "../../hooks/useGetProduct";
import Loading from "../UI/Loading.vue";
import Button from "../UI/Button.vue";
import TableCharacter from "./TableCharacter.vue";
import {useStore} from "vuex";

const id = window.location.pathname.split('/').pop()
const {product, loading} = useGetProduct(Number(id))
const store = useStore();

const addProductInBasket = (id:number) => {
  if (store.state.basket.basket.includes(id)){
    store.commit('basket/deleteOutBasket', id);
  }
  else {
    store.commit('basket/addInBasket', id);
  }
}

</script>

<style lang="scss" scoped>

.product__block {
  padding: 30px 0;
  height: 100%;
  display: flex;
}

.title {
  font-size: 32px;
  font-weight: bold;
  margin-bottom: 20px;
}

.img {
  width: 300px;
  height: 400px;
  object-fit: cover;
  margin-right: 30px;
}

.info__wrapper {
  width: 100%;
}

.info {
  width: 100%;
  display: flex;
}

.table__wrapper {
  display: flex;
  flex-direction: column;
  width: 100%;
}

.btn__add-basket {
  margin-right: 15px;
}

.description {
  font-size: 22px;
  line-height: 1.5em;
}

</style>