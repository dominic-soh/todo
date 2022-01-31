<template>
  <div id='app'>
    <todo></todo>
    <notifications />
  </div>
</template>

<script>
import todo from './components/todo.vue'

export default {
  name: 'app',
  components: {
    todo,
  }
}
</script>

<style>

</style>
