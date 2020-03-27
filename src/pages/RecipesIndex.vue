<template>
  <div class="index">

      <RecipeCard :recipes="recipes"/>
    <div class="background">
      <img src="../assets/undraw_breakfast_psiw.svg" alt="Breakfast food and plate">
    </div>
  </div>
</template>

<script>
import RecipeCard from '@/components/recipeCard';

export default {
  name: 'RecipesIndex',
  components: {
    RecipeCard,
  },
  data() {
    return {
      recipes: null,
      error: null,
    };
  },
  created() {
    this.$http.plain.get('http://localhost:3000/')
      .then(response => this.recipes = response.data)
      .catch(error => this.error = error);
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.background {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  height: 100vh;
  width: 100vw;
  z-index: -999;
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
}
img {
  max-height: 50vh;
  -webkit-filter: grayscale(70%); /* Safari 6.0 - 9.0 */
  filter: grayscale(70%);
}

h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
