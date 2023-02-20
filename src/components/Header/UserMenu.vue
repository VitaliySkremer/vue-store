<template>
  <div class="menu__wrapper">
    <p>Hello, </p>
    <button @click.stop="toggleMenu" class="user">
      {{store.state.user.username}}
    </button>
    <div ref="menuRef" v-if="menuActive" class="menu">
      <card>
        <ul @click="toggleMenu" class="list">
          <li v-for="item in menu" :key="item.name">
            <router-link class="menu_link" v-if="item.path" :to="item.path">{{item.name}}</router-link>
            <component v-else :is="item.component"/>
          </li>
        </ul>
      </card>
    </div>
  </div>
</template>

<script setup lang="ts">
import {useStore} from "vuex";
import {onMounted, ref} from "vue";
import Card from "../UI/Card.vue";
import OutAuth from "./OutAuth.vue";
const menu = [
  {name:'Корзина', path:'/basket'},
  {name:'Выйти', component:OutAuth},
]

const store = useStore()
const menuActive = ref(false);
const menuRef = ref();
const toggleMenu = () =>{
  menuActive.value = !menuActive.value
}

onMounted(()=>{
  const click = (event:MouseEvent) =>{
    if (menuRef.value && !menuRef.value.contains(event.target)){
      menuActive.value = false;
    }
  }
  document.addEventListener('click', click)
})

</script>

<style lang="scss" scoped>
.menu__wrapper {
  display: flex;
  align-items: center;
  color: white;
  font-size: 18px;
  position: relative;
}

.list {
  list-style: none;
  margin: 0;
  padding: 0;
}

.menu {
  position: absolute;
  top: 100%;
  &_link {
    background-color: transparent;
    color: var(--main-color);
    text-decoration: none;
    display: block;
    padding: 10px;
    border: none;
    border-bottom: 2px solid var(--lightgray);
    transition: background-color .2s ease;

    &:hover {
      background-color: rgba(128, 44, 110,.2);
    }

    &:not(last-child){
      margin-bottom: 5px;
    }
  }
}

.user {
  background-color: transparent;
  border: none;
  color: white;
  font-weight: bold;
}

</style>