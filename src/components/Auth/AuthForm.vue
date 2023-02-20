<template>
  <div class="auth">
    <Card class="auth_wrapper">
      <div class="tabs">
        <Tab
            @click="selectTab(Tabs.AUTH)"
            :active="activeTab === Tabs.AUTH"
        >Авторизация</Tab>
        <Tab
            @click="selectTab(Tabs.REGISTRATION)"
            :active="activeTab === Tabs.REGISTRATION"
        >Регистрация</Tab>
      </div>
      <LoginForm v-if="activeTab===Tabs.AUTH"/>
      <RegistrationForm v-else/>
    </Card>
  </div>
</template>

<script setup lang="ts">
import LoginForm from "./LoginForm.vue";
import RegistrationForm from "./RegistrationForm.vue";
import Card from "../UI/Card.vue";
import Tab from "../UI/Tab.vue";
import {ref} from "vue";

enum Tabs {
  AUTH = 'Авторизация',
  REGISTRATION = 'Регистрация'
}

const activeTab = ref<Tabs>(Tabs.AUTH)
const selectTab = (tab:Tabs) =>{
  activeTab.value = tab;
}

</script>

<style lang="scss" scoped>
.auth {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;

  &_wrapper {
    min-width: 500px;
    min-height: 50px;
  }
}

.tabs {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 20px;
}
</style>