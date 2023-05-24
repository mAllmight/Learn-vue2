<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'UserInfo',
  props: {
    userProps: {
      type: Object,
      required: true
    }
  }
})
</script>

<template>
  <div class="user-info">
    <p>{{ userProps.id }}</p>
    <p>{{ userProps.name }}</p>
    <p>{{ userProps.email }}</p>
    <p style="color: aqua">{{ userProps.address.city }}</p>
    <a class="user-info__link" :href="userProps.website">{{ userProps.website }}</a>
  </div>
</template>

<style scoped lang="scss">
.user-info {
  opacity: 0.5;
  width: 300px;
  height: auto;
  border: 1px solid red;
  border-radius: 8px;
  padding: 20px;
  text-align: center;
  margin-bottom: 20px;

  &:last-child {
    margin: 0;
  }
  &__link {
    margin-top: 200px;
    display: block;
  }

  @media (max-width: 1000px) {
    width: 150px;
  }
}
</style>
