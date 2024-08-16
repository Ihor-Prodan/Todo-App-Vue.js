<template>
  <div class="todoapp__main-wrapper">
    <TransitionGroup class="todoapp__main" name="list" tag="div">
      <TodoItem
        :title="todo.title"
        :completed="todo.completed"
        :id="todo.id"
        v-for="todo of todosList.filteredTodos"
        v-bind:key="todo.id"
      />
    </TransitionGroup>
  </div>
</template>

<script setup lang="ts">
import TodoItem from './TodoItem.vue';
import { useTodoStore } from '@/stores/todosStore';

const todosList = useTodoStore();
</script>

<style>
.list-enter-active,
.list-leave-active {
  max-height: 60px;
  transition: all 0.5s ease;
}
.list-enter-from,
.list-leave-to {
  opacity: 0;
  max-height: 0px;
  transform: scaleY(0);
}
</style>
