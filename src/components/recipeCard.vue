<template>
  <div class="recipeCards">
    <div v-for="recipe in recipes"
      :key="recipe.id"
      :class="{
        'recipeCard': true,
        'isSelected': selectedRecipeId === recipe.id && focusOnRecipe,
        'isNotSelected': selectedRecipeId &&  selectedRecipeId !== recipe.id,
      }"
      @click="selectRecipe(recipe.id)">
      <div v-if="selectedRecipeId === recipe.id && focusOnRecipe"
        class="closeContainer"
        @click="unselectRecipe">
        CLOSE
      </div>
      <template v-if="!selectedRecipeId 
        || (selectedRecipeId === recipe.id)">
        <div class="imgContainer">
          <img :src="recipe.image"></img>
        </div>
        <div class="infoContainer">
          <h3>{{ recipe.name }} </h3>
        </div>
      </template>
    </div>
  </div>
</template>

<script>
export default {
  name: 'RecipeCard',
  props: {
    recipes: {
      required: true,
      type: Array,
      default: () => [],
    },
  },
  data () {
    return {
      selectedRecipeId: null,
      focusOnRecipe: false,
    }
  },
  methods: {
    selectRecipe(id) {
      if (this.selectedRecipeId) { return }
      this.selectedRecipeId = id;
      setTimeout(() => {
        this.focusOnRecipe = true;
      }, 700);
    },
    unselectRecipe () {
      this.focusOnRecipe = false;
      setTimeout(() => {
        this.focusOnRecipe = false;
        this.selectedRecipeId = null;
      }, 700);
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.recipeCards {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
}
.isNotSelected {
  opacity: 0;
  flex: 0 1 0px !important;
}
.isSelected {
  transition: .7s ease !important;
  min-height: 100vh !important;
  position: fixed !important;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
}
.recipeCard {
  transition: .7s ease;
  height: 250px;
  border-radius: 5px;
  box-shadow: 2px 2px 2px rgba(1,1,1,0.6);
  margin: 10px 20px;
  background-color: white;
  flex: 0 0 320px;
  position: relative;
}
.imgContainer {
  position: relative;
  margin: 5px auto;
  width: 290px;
  height: 180px;
  overflow: hidden;
  border: 1px solid black;
  border-radius: 5px;
  text-align: center;
  display: block;
  vertical-align: top;
}
.closeContainer {
  position: absolute;
  top: 10px;
  right: 10px;
  height: 20px;
  width: 80px;
}
img {
  display: block;
  min-width: 100%;
  max-width: 100%;
  min-height: 100%;
  height: auto;
  margin: auto;
  position: absolute;
  left: 50%;
  top: 50%;
  -webkit-transform: translateY(-50%) translateX(-50%);
}
</style>
