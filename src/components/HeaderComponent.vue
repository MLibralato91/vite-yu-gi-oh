<template>
  <header>
    <div class="container">
      <div class="title d-flex align-items-center justify-content-center">
        <img class="img-fluid" src="../../public/images/pngwing.com.png" alt="">
        <h1 class="ps-3">{{ title }}</h1>
      </div>
      
    </div>
  </header>
</template>

<script>


import SelectComponent from './SelectComponent.vue'

export default {
  name: 'HeaderComponent',

  props: {
    title: String
  },
  
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