<template>
  <form @submit.prevent="submit" class="form">
    <Input
        :value="username"
        @input="username = $event.target.value"
        class="input"
        placeholder="Введите login"/>
    <Input
        :value="password"
        @input="password = $event.target.value"
        class="input"
        placeholder="Введите password"/>
    <Button>
      Авторизоваться
    </Button>
    <Loading v-if="store.state.user.isChecked"/>
  </form>
</template>

<script setup lang="ts">
import Input from "../UI/Input.vue";
import Button from "../UI/Button.vue";
import {useStore} from "vuex";
import {ref} from "vue";
import Loading from "../UI/Loading.vue";

const store = useStore();
const username = ref('mor_2314');
const password = ref('83r5^_');

const submit = () => {
  if(!username.value || !password.value) return
  store.dispatch('user/login',{username:username.value,password:password.value})
}

</script>

<style scoped>

.input {
  margin-bottom: 20px;
}

.form {
  width: 500px;
}

</style>