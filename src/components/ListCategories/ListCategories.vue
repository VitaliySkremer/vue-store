<template>
  <div class="list" v-if="!store.state.categories.loading">
    <Tab
        @click="setActive(item)"
        :active="item === store.state.categories.activeCategories"
        v-for="item in store.state.categories.list"
        :key="item">
      {{item}}
    </Tab>
  </div>
  <Loading v-else/>
</template>

<script setup lang="ts">

import {useStore} from "vuex";
import {onMounted} from "vue";
import Tab from "../UI/Tab.vue";
import Loading from "../UI/Loading.vue";

const store = useStore()

const setActive = (value:string) =>{
  store.commit('categories/setActiveCategories', value)
}
onMounted(()=>{
  if(!store.state.categories.list.length){
    store.dispatch('categories/getCategories')
  }
})

</script>

<style scoped>

.list{
  display: flex;
  align-items: center;
  justify-content: space-between;
}

</style>