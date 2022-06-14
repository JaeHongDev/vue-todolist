<template>
  <div id="todo-input">
    <input type="text"  v-model="content" @keyup.enter="addTodo"/>
    <button type="submit"  @click="addTodo">제출</button>
  </div>
</template>

<script>
export default {
  name: "TodoInput",

  data(){
    return{
      content:''
    }
  },
  methods:{
    addTodo(){
      this.$store.commit('addTodo',this.content);
      this.content = ''
    }
  }
}
</script>

<style scoped>

</style>