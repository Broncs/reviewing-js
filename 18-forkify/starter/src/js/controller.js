import * as model from './model.js';
import recipeView from './views/recipeView.js';

import 'core-js/stable';
import 'regenerator-runtime/runtime';

// const recipeContainer = document.querySelector('.recipe');

// https://forkify-api.herokuapp.com/v2

///////////////////////////////////////

const controlRecipes = async () => {
  // 1) Loading recipe
  try {
    const id = window.location.hash.slice(1);
    console.log(id);

    if (!id) return;

    recipeView.renderSpinner();

    // 2_ Rendering recipe
    await model.loadRecipe(id);

    recipeView.render(model.state.recipe);
  } catch (error) {
    alert(error);
  }
};

controlRecipes();

['hashchange', 'load'].forEach(ev =>
  window.addEventListener(ev, controlRecipes)
);
