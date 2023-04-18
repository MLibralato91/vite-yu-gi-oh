
<template>
<HeaderComponent title="Yu-Gi-Oh"/>
 <SelectComponent @search-change="getCharacters" />
  <main>
    <CharactersList />

  </main>
</template>

<script>
import { store } from './data/store';
import axios from 'axios';
import HeaderComponent from './components/HeaderComponent.vue';
import CharactersList from './components/CharactersList.vue';
import SelectComponent from './components/SelectComponent.vue';
export default {
  name: 'App',
  components: {
    HeaderComponent,
    CharactersList,
    SelectComponent
  },
  data() {
    return {
      store,
     

    }
  },
  methods: {
    getCharacters() {
      let url = store.baseUrl + store.endpoint;
      let params = {}
      for (let key in store.search) {
        if (store.search[key]) {
          params[key] = store.search[key]
        }
      }
      if (store.search.archetype != ''){
        url = 'https://db.ygoprodeck.com/api/v7/cardinfo.php?num=50&offset=0'
         console.log(url)
      }
      axios.get(url, {params}).then((res) => {
        //console.log(res.data.data);
        store.characterList = res.data.data;
        //console.log(store.characterList);
      });
    }
  },
  mounted() {
    store.endpoint = '?num=50&offset=0'
    this.getCharacters();
  }
}
</script>

<style lang="scss" scoped>

</style>