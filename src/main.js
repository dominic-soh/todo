import { createApp } from 'vue'
import App from './App.vue'
import 'bootstrap/dist/css/bootstrap.min.css'
import '@fortawesome/fontawesome-free/css/all.css'
import '@fortawesome/fontawesome-free/js/all.js'
import Notifications from '@kyvg/vue3-notification'
import { createStore } from 'vuex'

export const store = createStore({
    state: {
        isEditing: false,
        task: "",
        editedTask: null,
        priorities: ["High", "Normal", "Low"],
        statuses: ["To-do", "In progress", "Completed"],
        haram: ["pork", "lard", "babi", "alcohol", "beer", "gin", "vodka", "sex", "fap", "whiskey", "tequila", "cognac"],
        halal: ["jihad", "kill infidels", "masjid", "allah", "mashallah", "bismillah", "inshallah", "forgive"],
        tasks: [
            {
                Task: "Jihad",
                Status: "To-do",
                Priority: "High"
            },
            {
                Task: "Visit Masjid",
                Status: "In progress",
                Priority: "Normal"
            },
        ],
    },

    mutations: {
        submitTask(state, payload) {
            if (payload.length === 0) return;
            // state.halalCheck(state.task);
            state.tasks.push({
              Task: payload,
              Status: "To-do",
              Priority: "Normal"
            });
            // state.isEditing = false;
          },
    }

})

const app = createApp(App)
app.use(Notifications)
app.use(store)
app.mount('#app')

