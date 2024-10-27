import {
    FETCH_RECIPES_REQUEST,
    FETCH_RECIPES_SUCCESS,
    FETCH_RECIPES_FAILURE,
    SELECT_RECIPE,
  } from '../actions/recipeActions';
  
  const initialState = {
    loading: false,
    recipes: [],
    error: '',
    selectedRecipe: null
  };
  
  const recipeReducer = (state = initialState, action) => {
    switch (action.type) {
      case FETCH_RECIPES_REQUEST:
        return { ...state, loading: true };
      case FETCH_RECIPES_SUCCESS:
        return { ...state, loading: false, recipes: action.payload, error: '' };
      case FETCH_RECIPES_FAILURE:
        return { ...state, loading: false, recipes: [], error: action.payload };
        case SELECT_RECIPE:
      return {
        ...state,
        selectedRecipe: state.recipes.find((recipe) => recipe.id === action.payload),
      };
      default:
        return state;
    }
  };
  
  export default recipeReducer;


  const recipeReducer = (state = initialState, action) => {
    switch (action.type) {
      // Altri casi di azione...
      case SEARCH_RECIPES:
        return {
          ...state,
          filteredRecipes: state.recipes.filter((recipe) =>
            recipe.name.toLowerCase().includes(action.payload.toLowerCase())
          ),
        };
      default:
        return state;
    }
  };
  
  export default recipeReducer;


  mport {
    FETCH_RECIPES_REQUEST,
    FETCH_RECIPES_SUCCESS,
    FETCH_RECIPES_FAILURE,
    SELECT_RECIPE,
  } from '../actions/recipeActions';
  
  const initialState = {
    loading: false,
    recipes: [],
    selectedRecipe: null,
    error: '',
  };
  
  const recipeReducer = (state = initialState, action) => {
    switch (action.type) {
      case FETCH_RECIPES_REQUEST:
        return { ...state, loading: true };
      case FETCH_RECIPES_SUCCESS:
        return { ...state, loading: false, recipes: action.payload, error: '' };
      case FETCH_RECIPES_FAILURE:
        return { ...state, loading: false, recipes: [], error: action.payload };
      case SELECT_RECIPE:
        return {
          ...state,
          selectedRecipe: state.recipes.find((recipe) => recipe.id === action.payload),
        };
      default:
        return state;
    }
  };
  
  export default recipeReducer;