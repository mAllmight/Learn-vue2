<script>
import { defineComponent } from 'vue'
import ModalForm from '@/components/ModalForm.vue'

export default defineComponent({
  components: {
    ModalForm
  },
  data() {
    return { isShowModal: false }
  },
  methods: {
    CreatePost() {
      this.isShowModal = true
    },
    closeModalHandler() {
      this.isShowModal = false
    }
  },
  mounted() {
    console.log(this.$route.query.id)
  }
})
</script>

<template>
  <div class="about-view">
    <button @click="CreatePost" class="about-view__btn">Создать пост</button>
    <ModalForm :is-show-modal="isShowModal" @CloseModal1="closeModalHandler" />
  </div>
</template>

<style scoped lang="scss">
.about-view {
  display: flex;
  justify-content: space-around;
  align-items: center;

  &__btn {
    color: red;
    background: aqua;
    font-size: 25px;
    border-radius: 50%;
    padding: 25px;
    margin: 10px;
    width: 150px;

    &:hover {
      padding: 50px;
      content: 'прив';
      top: 0;
      left: 0;
      width: 200px;
      background: gold;
      border-radius: 80%;
      transition: all 0.5s ease;
    }
  }
}
</style>
