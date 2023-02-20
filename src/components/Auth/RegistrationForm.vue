<template>
  <form class="form">
    <Input class="input" placeholder="Введите email"/>
    <Input class="input" placeholder="Введите login"/>
    <Input class="input" placeholder="Введите password"/>
    <Input class="input" placeholder="Повторите password"/>
    <Button>
      Авторизоваться
    </Button>
  </form>
</template>

<script setup lang="ts">
import Input from "../UI/Input.vue";
import Button from "../UI/Button.vue";
</script>

<style scoped>

.input {
  margin-bottom: 20px;
}

.form {
  width: 500px;
}

</style>