import { ADD_FAVORITE, REMOVE_FAVORITE } from '../actions/favoriteActions';

const initialState = {
  favorites: [],
};

const favoriteReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_FAVORITE:
      return {
        ...state,
        favorites: [...state.favorites, action.payload],
      };
    case REMOVE_FAVORITE:
      return {
        ...state,
        favorites: state.favorites.filter((recipe) => recipe.id !== action.payload),
      };
    default:
      return state;
  }
};

export default favoriteReducer;