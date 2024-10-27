import { combineReducers } from 'redux';
import recipeReducer from './recipeReducer';
import favoriteReducer from './favoriteReducer';

const rootReducer = combineReducers({
  recipes: recipeReducer,
  favorites: favoriteReducer,
});

export default rootReducer;