import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeFavorite } from '../actions/favoriteActions';

const Favorites = () => {
  const favorites = useSelector((state) => state.favorites.favorites);
  const dispatch = useDispatch();

  return (
    <div>
      <h2>Ricette Preferite</h2>
      <ul>
        {favorites.map((recipe) => (
          <li key={recipe.id}>
            <h3>{recipe.name}</h3>
            <button onClick={() => dispatch(removeFavorite(recipe.id))}>Rimuovi</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Favorites;