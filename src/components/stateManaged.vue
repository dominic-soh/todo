<template>
  <div class="container">
    <h2 class="text-center mt-5">This is a Vuex version</h2>
    <center>
      <img src="../assets/Halal.png" style="width: 15vw" />
    </center>
    <h3 class="class text-center mt-5">Inshallah the Vuex shall work</h3>
    <!-- Input -->
    <div class="d-flex">
      <input
        v-on:keyup.enter="submitTask(task)"
        v-model="task"
        placeholder="Enter Halal Task"
        class="form-control"
      />
      <button @click="submitTask(task)" class="btn btn-warning rounded-0">
        Submit
      </button>
    </div>
    <!-- <div v-else class="d-flex">
      <input
        v-on:keyup.enter="updateTask"
        v-model="task"
        placeholder="Enter Halal Task"
        class="form-control"
      />
      <button @click="updateTask" class="btn btn-primary rounded-0">
        Update
      </button>
    </div> -->
    <!-- Table -->
    <table class="table table-bordered mt-5">
      <thead>
        <tr>
          <th scope="col">Priority</th>
          <th scope="col">Task</th>
          <th scope="col">Status</th>
          <th scope="col" class="text-center" width="40px">Delete</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(task, index) in tasks" :key="index">
          <td>{{ task.Priority }}</td>
          <td>{{ task.Task }}</td>
          <td>{{ task.Status }}</td>
          <td>
            <div class="text-center">
              <span class="fa fa-trash"></span>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import { mapState, mapMutations } from "vuex";

export default {
  data() {
    return {
      task: "",
    };
  },
  computed: {
    ...mapState(["tasks"]),
  },

  methods: {
    ...mapMutations(["submitTask"]),
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.pointer {
  cursor: pointer;
}
</style>