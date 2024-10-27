import axios from 'axios';

// Tipi di azione
export const FETCH_RECIPES_REQUEST = 'FETCH_RECIPES_REQUEST';
export const FETCH_RECIPES_SUCCESS = 'FETCH_RECIPES_SUCCESS';
export const FETCH_RECIPES_FAILURE = 'FETCH_RECIPES_FAILURE';

// Azioni asincrone per recuperare le ricette dall'API
export const fetchRecipes = () => {
  return async (dispatch) => {
    dispatch({ type: FETCH_RECIPES_REQUEST });
    try {
      const response = await axios.get('https://api.ricette.com/vegetarian');
      dispatch({
        type: FETCH_RECIPES_SUCCESS,
        payload: response.data,
      });
    } catch (error) {
      dispatch({
        type: FETCH_RECIPES_FAILURE,
        payload: error.message,
      });
    }
  };
};