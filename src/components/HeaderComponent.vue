<template>
  <header>
    <div class="container">
      <div class="title d-flex align-items-center justify-content-center">
        <img class="img-fluid" src="../../public/images/pngwing.com.png" alt="">
        <h1 class="ps-3">{{ title }}</h1>
      </div>
      <div class="select">
        <select name="" id="">
          <option value="" selected>Scegli..</option>
          <option :value="archetype" v-for="(archetype, index) in archetypeSelect" :key="index">{{ archetype.archetype_name
          }}</option>
        </select>
      </div>
    </div>
  </header>
</template>

<script>


import { store } from '../data/store';
import axios from 'axios';

export default {
  name: 'HeaderComponent',
  props: {
    title: String
  },
  data() {
    return {
      store,
      archetypeSelect: []
    }
  },
  mounted() {
    axios.get(store.archetypesUrl).then((res) => {
      console.log(res.data);
      this.archetypeSelect = res.data
      console.log(this.archetypeSelect)
    })
  }
}
</script>

<style lang="scss" scoped>
header {
  background-color: antiquewhite;

  img {
    width: 100px;
  }
}
</style>