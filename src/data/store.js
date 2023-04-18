import { reactive } from 'vue';

export const store = reactive({
  characterList: {},
  baseUrl: 'https://db.ygoprodeck.com/api/v7/cardinfo.php?num=30&offset=0',
})