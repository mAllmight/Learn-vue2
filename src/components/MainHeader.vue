<script>
import { defineComponent } from 'vue'
export default defineComponent({
  components: {},

  data() {
    return {}
  },
  methods: {}
})
</script>

<template>
  <nav class="main-header">
    <ul class="main-header__list list">
      <li class="list__item list">
        <router-link class="item__link" to="/">Дом</router-link>
      </li>
      <li class="list__item list">
        <router-link class="item__link" to="/about">О Нас</router-link>
      </li>
    </ul>
  </nav>
</template>

<style scoped lang="scss">
.main-header {
  background: deeppink;
  height: 150px;

  .list {
    display: flex;
    justify-content: space-around;
    font-size: 3em;
    padding: 20px;
    margin: 0px 20px 20px;

    .item__link {
      font-size: 50px;
      border-radius: 30%;
      padding: 10px;
      background: aqua;
      color: red;
    }
    .item__link:hover {
      content: '';

      top: 0;
      left: 0;
      width: 100%;

      background: gold;
      border-radius: 5px;
      transition: all 1s ease;
    }
  }
}
</style>
