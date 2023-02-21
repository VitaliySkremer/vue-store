<template>
  <section class="basket__buy">
    <Card class="basket">
      <p>Итого: {{store.state.basket.selectProduct.reduce((acc,item)=> acc+=item.price,0)
          .toLocaleString('en-US',{ style: 'currency', currency: 'USD' })}}</p>
      <Button>
        Оформить заказ
      </Button>
    </Card>
  </section>
</template>

<script setup lang="ts">
import Card from "../UI/Card.vue";
import Button from "../UI/Button.vue";
import {useStore} from "vuex";

const store = useStore();

</script>

<style scoped>

.basket__buy {
  min-width: 250px;
  margin-left: 30px;
}

.basket {
  position: sticky;
  top: 40px;
}

</style>