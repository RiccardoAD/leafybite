import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    favorite: JSON.parse(localStorage.getItem('favorites-recipes')) || []
};

const favoritesSlice = createSlice({
    name: 'favorites',
    initialState,
    reducers: {
        addFavorite: (state, action) => {
            if (!state.favorite.includes(action.payload)) {
                state.favorite.push(action.payload);
                localStorage.setItem('favorites-recipes', JSON.stringify(state.favorite));
            }
        },
        removeFavorite: (state, action) => {
            const index = state.favorite.indexOf(action.payload);
            if (index !== -1) {
                state.favorite.splice(index, 1);
                localStorage.setItem('favorites-recipes', JSON.stringify(state.favorite));
            }
        },
        setFavorites: (state, action) => {
            state.favorite = action.payload;
            localStorage.setItem('favorites-recipes', JSON.stringify(state.favorite));
        }
    }
});

export const { addFavorite, removeFavorite, setFavorites } = favoritesSlice.actions;
export default favoritesSlice.reducer;