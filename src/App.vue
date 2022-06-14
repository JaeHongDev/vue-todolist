<template>
  <img alt="Vue logo" src="./assets/logo.png"/>
  <Title name="To-do"/>
  <todo-input @add-todo ="addTodo"/>
  <todo-list :todos="todos" />
</template>

<script>
import Title from "@/components/Title";
import TodoInput from "@/components/TodoInput";
import TodoList from "@/components/TodoList";

export default {
  name: 'App',
  components: {
    Title,
    TodoInput,
    TodoList
  },
  data() {
    return {
      todos: ["할 일1"]
    }
  },
  methods: {
    addTodo(content) {
      console.log(content);
      this.todos.push(content);
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
