export const SELECT_RECIPE = 'SELECT_RECIPE';

export const selectRecipe = (recipeId) => ({
  type: SELECT_RECIPE,
  payload: recipeId,
});