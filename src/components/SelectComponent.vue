<template>
 <div class="select">
        <select name="" id="" v-model.trim="store.search.archetype" @change="$emit('search-change')">
          <option value="" selected>Scegli..</option>
          <option :value="archetype.archetype_name" v-for="(archetype, index) in archetypeSelect" :key="index">{{ archetype.archetype_name
          }}</option>
        </select>
      </div>
</template>

<script>
import { store } from '../data/store';
import axios from 'axios';
  export default {
    name: 'SelectComponent',
    data() {
    return {
      store,
      archetypeSelect: []
    }
  },
  mounted() {
    axios.get(store.archetypesUrl).then((res) => {
      //console.log(res.data);
      this.archetypeSelect = res.data
      console.log(this.archetypeSelect)
    })
  }
  }
</script>

<style lang="scss" scoped>

</style>