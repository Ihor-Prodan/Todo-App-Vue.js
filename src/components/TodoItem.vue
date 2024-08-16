<template>
  <div data-cy="Todo" :class="`todo ${completed ? 'completed' : ''}`">
    <label class="todo__status-label">
      <input
        type="checkbox"
        class="todo__status"
        :checked="completed"
        @change="todo.toggleTodo(id)"
      />
    </label>

    <form v-if="inputState" 
      @submit.prevent="saveTodo">
      <input
        ref="todoInput"
        type="text"
        class="todo__title-field"
        placeholder="Empty todo will be deleted"
        v-model.trim="newTitle"
        @dblclick="inputState = false"
        @keyup.esc="inputState = false"
        @focus="inputState = true"
        @blur="inputState = false"
        @keyup.enter="saveTodo"
      />
    </form>

    <template v-else>
      <span data-cy="TodoTitle" className="todo__title" @dblclick="inputState = true">
        {{ title }}
      </span>
      <button
        type="button"
        className="todo__remove"
        v-on:click="todo.removeTodo(id)"
      >
        ×
      </button>
    </template>
  </div>
</template>

<script setup lang="ts">
import { useTodoStore } from '@/stores/todosStore';
import { nextTick, ref, watch } from 'vue';

const props = defineProps<{
  title: string
  completed: boolean
  id: number
}>();

const todo = useTodoStore();
const inputState = ref(false);
const todoInput = ref<HTMLInputElement | null>(null);
const newTitle = ref<string>(props.title);

const focusInput = async () => {
  await nextTick();

  todoInput.value?.focus();
};

watch(inputState, (newVal) => {
  if (newVal) {
    newTitle.value = props.title;

    focusInput();
  }
});

function saveTodo() {
  if (newTitle.value === props.title) {
    inputState.value = false;

    return;
  }

  if (newTitle.value) {
    todo.updateTodo({
      id: props.id,
      title: newTitle.value,
      completed: props.completed
    });

    inputState.value = false;
  }
};
</script>
