<template>
  <div class="container">
    <h2 class="text-center mt-5">This is a Halal Todo app</h2>
    <h3 class="class text-center mt-5">
      Inshallah the task shall be completed
    </h3>
    <!-- Input -->
    <div v-if="!isEditing" class="d-flex">
      <input
        v-on:keyup.enter="submitTask"
        v-model="task"
        placeholder="Enter Halal Task"
        class="form-control"
      />
      <button @click="submitTask" class="btn btn-warning rounded-0">
        Submit
      </button>
    </div>
    <div v-else class="d-flex">
      <input
        v-on:keyup.enter="updateTask"
        v-model="task"
        placeholder="Enter Halal Task"
        class="form-control"
      />
      <button @click="updateTask" class="btn btn-primary rounded-0">
        Update
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
      isEditing: false,
      editedTask: null,
      task: "",
      statuses: ["To-do", "In progress", "Completed"],
      haram: ["pork", "lard", "babi", "alcohol", "beer"],
      halal: ["jihad", "kill infidels", "masjid", "allah"],
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
      this.halalCheck(this.task);
      this.tasks.push({
        Task: this.task,
        Status: "To-do",
      });

      this.task = "";
      this.isEditing = false;
    },

    updateTask() {
      this.tasks[this.editedTask].Task = this.task;
      this.halalCheck(this.task);
      this.isEditing = false;
      this.task = "";
    },

    deleteTask(index) {
      this.tasks.splice(index, 1);
    },

    editTask(index) {
      this.isEditing = true;
      this.task = this.tasks[index].Task;
      this.editedTask = index;
    },

    changeStatus(index) {
      let newIndex = this.statuses.indexOf(this.tasks[index].Status);
      if (++newIndex > 2) newIndex = 0;
      this.tasks[index].Status = this.statuses[newIndex];
    },

    halalCheck(task) {
      let text = task.toLowerCase();
      var regHaram = RegExp("\\b(" + this.haram.join("|") + ")\\b", "i");
      console.log(regHaram);
      if (!!text.match(regHaram) == true) {
        this.$notify({
          title: "<em>Haram!</em>",
          text: "Inshallah you will be destroyed",
          type: "error",
          duration: 100000,
        });
        console.log("Haram!");
      } else {
        var regHalal = RegExp("\\b(" + this.halal.join("|") + ")\\b", "i");
        if (!!text.match(regHalal) == true) {
          this.$notify({
            title: "<em>Halal!</em>",
            text: "You are on the road to Jannah",
            type: "success",
            duration: 100000,
          });
          console.log("Mashallah!");
        }
      }
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.pointer {
  cursor: pointer;
}
</style>
