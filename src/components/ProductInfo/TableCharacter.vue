<template>
  <table class="table">
    <tbody>
    <tr>
      <td class="td td_title">category:</td>
      <td class="td td_value">{{props.category}}</td>
    </tr>
    <tr>
      <td class="td td_title">rating:</td>
      <td class="td td_value">{{props.rate}}</td>
    </tr>
    <tr>
      <td class="td td_title">count:</td>
      <td class="td td_value">{{props.count}}</td>
    </tr>
    <tr>
      <td class="td td_title">price:</td>
      <td class="td td_value">{{props.price?.toLocaleString('en-US',{ style: 'currency', currency: 'USD' })}}</td>
    </tr>
    </tbody>
  </table>
</template>

<script setup lang="ts">

const props = defineProps<{
  category: string;
  rate:number;
  count:number;
  price:number;
}>()

</script>

<style lang="scss" scoped>
.table {
  height: fit-content;
  flex: 0 1 auto;
  margin-bottom: 30px;
}

.td {
  padding: 20px 20px 5px 10px;
  font-size: 18px;
  border-bottom: 2px solid var(--lightgray);
  &_value {
     text-align: end;
   }

  &_title {
     color: var(--main-color);
   }
}
</style>