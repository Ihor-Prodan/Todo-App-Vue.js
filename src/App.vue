<script setup lang="ts">
import TodoFooter from './components/TodoFooter.vue'
import TodoHeader from './components/TodoHeader.vue'
import TodoList from './components/TodoList.vue'
</script>

<template>
  <div class="todoapp">
    <h1 class="todoapp__title">todos</h1>
    <div class="todoapp__content">
      <TodoHeader />

      <TodoList />

      <TodoFooter />
    </div>
  </div>
</template>
