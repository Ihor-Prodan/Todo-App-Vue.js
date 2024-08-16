import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import type { Todo } from '@/components/types/TodoType';

export enum Status {
  All = 'all',
  Active = 'active',
  Completed = 'completed',
}

export const useTodoStore = defineStore('todo', () => {
  const todos = ref<Todo[]>([]);
  const filter = ref(Status.All);

  const addTodo = (newTodo: Todo) => {
    todos.value.push(newTodo)
  };

  const updateTodo = (newTodo: Todo) => {
    todos.value = todos.value.map((todo) =>
      todo.id === newTodo.id ? { ...todo, title: newTodo.title } : todo
    )
  };

  function toggleTodo(id: number) {
    const todo = todos.value.find((todo) => todo.id === id)
    if (todo) {
      todo.completed = !todo.completed
    }
  };

  function toggleAllTodo() {
    const allCompleted = todos.value.every((todo) => todo.completed)

    todos.value.forEach((todo) => {
      todo.completed = !allCompleted
    })
  };

  const removeTodo = (id: number) => {
    todos.value = todos.value.filter((todo) => todo.id !== id)
  };

  const setFilter = (newFilter: Status) => {
    filter.value = newFilter;
  };

  const filteredTodos = computed(() => {
    switch (filter.value) {
      case Status.Active:
        return todos.value.filter(todo => !todo.completed);
      case Status.Completed:
        return todos.value.filter(todo => todo.completed);
      default:
        return todos.value;
    }
  });

  const remaining = computed(() => todos.value.filter((todo) => !todo.completed).length);

  return {
    todos, 
    addTodo, 
    toggleTodo, 
    remaining, 
    removeTodo, 
    updateTodo, 
    toggleAllTodo,
    filteredTodos,
    setFilter,
    filter,
  }
})
