import React from 'react';
import { useSelector } from 'react-redux';

const RecipeDetails = () => {
  const selectedRecipe = useSelector((state) => state.recipes.selectedRecipe);

  if (!selectedRecipe) return <p>Seleziona una ricetta per visualizzare i dettagli.</p>;

  return (
    <div>
      <h2>{selectedRecipe.name}</h2>
      <p>{selectedRecipe.description}</p>
      {/* Visualizza altre informazioni sulla ricetta */}
    </div>
  );
};

export default RecipeDetails;