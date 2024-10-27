export const ADD_FAVORITE = 'ADD_FAVORITE';
export const REMOVE_FAVORITE = 'REMOVE_FAVORITE';

export const addFavorite = (recipe) => ({
  type: ADD_FAVORITE,
  payload: recipe,
});

export const removeFavorite = (recipeId) => ({
  type: REMOVE_FAVORITE,
  payload: recipeId,
});