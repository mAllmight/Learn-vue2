import { defineStore } from 'pinia'
import axios from 'axios'

export const usePostsStore = defineStore('posts-store', {
  state() {
    return {
      posts: []
    }
  },
  // getters: {
  //   doubleCount(state) {
  //     return state.users
  //   }
  // },
  actions: {
    getPosts() {
      axios
        .get('https://jsonplaceholder.typicode.com/posts')
        .then((response) => {
          this.posts = response.data
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
