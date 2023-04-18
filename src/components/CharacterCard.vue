<template>
  <div class="col-12 col-sm-6 col-md-4 col-lg-3 pt-5 d-flex align-items-stretch">
    <div class="character text-center d-flex flex-column justify-content-between">
      <div class="imgCard">
        <img class="img-fluid" :src="character.card_images[0].image_url" :alt="character.name">
        <h4>{{ character.name }}</h4>
      </div>
      <div class="font-weight-bold">{{ character.archetype }}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CharacterCard',
  props: ['character'],
  
}

</script>

<style lang="scss" scoped>
.character {
  background-color: rgba(169, 169, 135, 0.359);
  border-radius: 5%;

}

img {
  border-radius: 5%;
  box-shadow: 0 0 6px 3px rgba(#000, 0.55);

}
</style>

