<template>
  <div id='app'>
    <todo></todo>
    <stateManaged />
    <notifications />
  </div>
</template>

<script>
import todo from './components/todo.vue'
import stateManaged from './components/stateManaged.vue'

export default {
  name: 'app',
  components: {
    todo,
    stateManaged,
  }
}
</script>

<style>

</style>
