import { defineStore } from 'pinia'
import axios from 'axios'

export const useUsersStore = defineStore('user-store', {
  state() {
    return {
      users: []
    }
  },
  getters: {
    usersGetter(state) {
      return state.users.filter((item) => item.id > 5)
    }
  },
  actions: {
    getUsers() {
      axios
        .get('https://jsonplaceholder.typicode.com/users')
        .then((response) => {
          this.users = response.data
        })
        .catch(() => {
          console.log('ya debik')
        })
        .finally(() => {
          console.log('Выполнится в любом случае')
        })
    }
  }
})
