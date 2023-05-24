<script>
import { defineComponent } from 'vue'
import axios from 'axios'
export default defineComponent({
  emits: ['CloseModal1'],

  components: {},

  props: {
    isShowModal: {
      type: Boolean,
      default: false
    }
  },

  data() {
    return {
      bodyInput: '',
      titleInput: ''
    }
  },

  methods: {
    closeModal() {
      this.$emit('closeModal')
    },
    createPost() {
      axios
        .post('https://jsonplaceholder.typicode.com/posts', {
          title: this.titleInput,
          body: this.bodyInput
        })
        .then(() => {
          this.bodyInput = ''
          this.titleInput = ''
          this.closeModal()
        })
    }
  }
})
</script>

<template>
  <div class="modal-form" :class="{ 'modal-form_active': isShowModal }">
    <div class="modal_form__container container">
      <button class="container__close" @click="$emit('CloseModal1')">X</button>
      <form @submit.prevent="createPost" class="container__form form">
        <input type="text" v-model="titleInput" placeholder="VVEDITE LOGIN" />
        <input type="text" v-model="bodyInput" placeholder="VVEDITE PAROL" />
        <button type="submit" class="form__submit">Сохранить</button>
      </form>
    </div>
  </div>
</template>

<style scoped lang="scss">
.modal-form {
  position: fixed;
  background: gray;
  top: -100%;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: opacity 5s ease-out;

  &_active {
    opacity: 1;
    top: 0;
  }

  .container {
    width: 500px;
    height: fit-content;
    background: white;
    position: relative;
    padding: 60px 20px 20px 20px;

    &__close {
      position: absolute;
      right: 20px;
      top: 20px;
      width: 30px;
      height: 30px;
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 50%;
      background: red;
    }

    .form {
      display: flex;
      flex-direction: column;

      input {
        height: 50px;
        width: 100%;
        border: 1px solid black;
        margin-bottom: 20px;
        border-radius: 8px;
        padding: 10px;
      }

      &__submit {
        width: 100%;
        height: 50px;
        display: flex;
        justify-content: center;
        align-items: center;
        background: green;
        color: black;
        border-radius: 8px;
      }
    }
  }
}
</style>
