
<template>
<HeaderComponent title="Yu-Gi-Oh" />
  <main>
    <CharactersList />

  </main>
</template>

<script>
import { store } from './data/store';
import axios from 'axios';
import HeaderComponent from './components/HeaderComponent.vue';
import CharactersList from './components/CharactersList.vue';
export default {
  name: 'App',
  components: {
    HeaderComponent,
    CharactersList
  },
  data() {
    return {
      store,
     

    }
  },
  methods: {
    getCharacters() {
      let url = store.baseUrl + store.endpoint;
      


      axios.get(url).then((res) => {
        //console.log(res.data.data);
        store.characterList = res.data.data;
        //console.log(store.characterList);
      });
    }
  },
  mounted() {
    store.endpoint = ''
    this.getCharacters();
  }
}
</script>

<style lang="scss" scoped>

</style>