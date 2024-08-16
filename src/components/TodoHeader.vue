<template>
  <header class="todoapp__header">
    <button 
      type="button" 
      class="todoapp__toggle-all" :class="{active: todo.remaining === 0}"
      @click="todo.toggleAllTodo"
    />
    <form @submit.prevent="addTodo">
      <input
        type="text"
        class="todoapp__new-todo"
        placeholder="What needs to be done?"
        v-model="newTodo.title"
      />
    </form>
  </header>
</template>

<script setup lang="ts">
import { useTodoStore } from '@/stores/todosStore';
import { ref } from 'vue';


const todo = useTodoStore();
const newTodo = ref({
  title: '',
  id: Date.now(),
  completed: false
}); 

function addTodo() {
  if (newTodo.value.title.trim()) {
    todo.addTodo({
      id: Date.now(),
      title: newTodo.value.title,
      completed: false,
    });
    newTodo.value.title = '';
  }
}
</script>