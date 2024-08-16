<template>
  <footer class="todoapp__footer" v-if="items.todos.length > 0">
    <span class="todo-count"> 
        {{ items.remaining }} items left 
    </span>

    <nav class="filter">
      <a href="#/" 
        class="filter__link active" 
        :class="{ selected: items.filter === Status.All }"
        @click.prevent="items.setFilter(Status.All)"
      > 
        All 
      </a>

      <a href="#/active" 
        class="filter__link" 
        :class="{ selected: items.filter === Status.Active }"
        @click.prevent="items.setFilter(Status.Active)"
      > 
        Active 
      </a>

      <a href="#/completed" 
        class="filter__link active" 
        :class="{ selected: items.filter === Status.Completed }"
        @click.prevent="items.setFilter(Status.Completed)"
      > 
        Completed 
      </a>
    </nav>

    <button type="button" 
      class="todoapp__clear-completed" 
      @click="clearCompleted"
    >
      Clear completed
    </button>
  </footer>
</template>

<script setup lang="ts">
import { Status, useTodoStore } from '@/stores/todosStore';

const items = useTodoStore();

function clearCompleted() {
  items.todos = items.todos.filter(todo => !todo.completed);
}
</script>

