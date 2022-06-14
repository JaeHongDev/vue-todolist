<template>
  <div id="title">
    <h1>{{ name }}</h1>
  </div>
</template>

<script>
export default {
  name: "todoTitle",
  props: {
    name: String
  }
}
</script>

<style scoped>

</style>