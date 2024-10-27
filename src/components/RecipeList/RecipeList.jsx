import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchRecipes } from '../actions/recipeActions';

const RecipeList = () => {
  const dispatch = useDispatch();
  const { loading, recipes, error } = useSelector((state) => state.recipes);

  useEffect(() => {
    dispatch(fetchRecipes());
  }, [dispatch]);

  if (loading) return <p>Caricamento in corso...</p>;
  if (error) return <p>Errore: {error}</p>;

  return (
    <div>
      <h2>Ricette Vegetariane</h2>
      <ul>
        {recipes.map((recipe) => (
          <li key={recipe.id}>
            <h3>{recipe.name}</h3>
            <p>{recipe.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RecipeList;