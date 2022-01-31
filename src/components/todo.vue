<template>
  <div class="container">
    <h2 class="text-center mt-5">This is a freaking Todo app</h2>
    <!-- Input -->
    <div class="d-flex">
      <input v-model="task" placeholder="Enter Task" class="form-control" />
      <button @click="submitTask" class="btn btn-warning rounded-0">
        Submit
      </button>
    </div>
    <!-- Table -->
    <table class="table table-bordered mt-5">
      <thead>
        <tr>
          <th scope="col" width="240px">Task</th>
          <th scope="col" width="120px">Status</th>
          <th scope="col" class="text-center" width="40px">#</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(task, index) in tasks" :key="index">
          <td class="pointer" v-on:click="editTask(index)">
            {{ task.Task }}
          </td>
          <td class="pointer" v-on:click="changeStatus(index)">
            {{ task.Status }}
          </td>
          <td>
            <div class="text-center" @click="deleteTask(index)">
              <span class="fa fa-trash"></span>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: "todo",
  props: {
    msg: String,
  },

  data() {
    return {
      task: "",
      statuses: ["To-do", "In progress", "Completed"],
      tasks: [
        {
          Task: "Jihad",
          Status: "To-do",
        },
        {
          Task: "Visit Masjid",
          Status: "In progress",
        },
      ],
    };
  },

  methods: {
    submitTask() {
      if (this.task.length === 0) return;

      this.tasks.push({
        Task: this.task,
        Status: "To-do",
      });

      this.task = "";
    },

    deleteTask(index) {
      this.tasks.splice(index, 1);
    },

    editTask(index) {
      this.task = this.tasks[index].Task
    },

    changeStatus(index) {
      let newIndex = this.statuses.indexOf(this.tasks[index].Status);
      if (++newIndex > 2) newIndex = 0;
      this.tasks[index].Status = this.statuses[newIndex]
    }
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.pointer {
  cursor: pointer;
}
</style>
