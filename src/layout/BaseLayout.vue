<script>

import {defineComponent} from "vue";
import MainHeader from "@/components/MainHeader.vue";
import { RouterView } from 'vue-router';
export default defineComponent({
    components: {MainHeader, RouterView},
    data(){
        return {}
    },
    methods: {}
})
</script>

<template>
    <div>
        <MainHeader/>
        <RouterView />
    </div>

</template>

<style scoped lang="scss">

</style>