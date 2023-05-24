<script>
import { defineComponent } from 'vue'
import { useUsersStore } from '@/stores/users.store'
import { mapState } from 'pinia'
import { usePostsStore } from '@/stores/posts.store'
import UserInfo from '@/components/UserInfo.vue'

export default defineComponent({
  components: { UserInfo },
  data() {
    const userStore = useUsersStore()
    const postsStore = usePostsStore()
    return {
      userStore,
      postsStore
    }
  },
  computed: {
    ...mapState(useUsersStore, {
      myUsers: 'users'
    }),
    ...mapState(usePostsStore, {
      myPosts: 'posts'
    })
  },

  methods: {
    getAllUsers() {
      this.userStore.getUsers()
    },
    getAllPosts() {
      this.postsStore.getPosts()
    }
  },
  mounted() {
    this.getAllUsers()
    this.getAllPosts()
  }
})
</script>

<template>
  <div class="home-view">
    <template v-for="(user, index) in myUsers" :key="index">
      <UserInfo :userProps="user" />
    </template>
  </div>
</template>

<style scoped lang="scss">
.home-view {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
}
</style>
