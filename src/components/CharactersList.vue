<template>
  <section class="container">
      <div class="row">
          <CharacterCard v-for="(character, index) in store.characterList" :key="index" :character="character" />
      </div>
  </section>
</template>

<script>
import { store } from '../data/store';
import CharacterCard from './CharacterCard.vue';

console.log('store',  store );
export default {
  name: 'CharactersList',
  components: {
      CharacterCard
  },
  data() {
      return {
          store
      }
  },
  methods: {
  }
}
</script>

<style lang="scss" scoped></style>