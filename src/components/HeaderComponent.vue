<template>
  <header>
      <h1 class="text-center mb-4">{{ title }}</h1>
      <div class="select">
        <select name="" id="">
          <option value="">Seleziona</option>
        </select>
      </div>
  </header>
</template>

<script>
export default {
  name: 'HeaderComponent',
  props: {
      title: String
  }
}
</script>

<style lang="scss" scoped>
  header{
    background-color: antiquewhite;
  }
</style>