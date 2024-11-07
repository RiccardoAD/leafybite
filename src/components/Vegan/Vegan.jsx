import React, { useState, useEffect } from 'react';
import Card from '../Card/Card';
import './Vegan.css';
import { getRecipes } from "../../api";


function Vegan() {

    const [recipes, setRecipes] = useState([]);
    const [offset, setOffset] = useState(0);

    const urlParams = 'salad';

    useEffect(() => {
        getRecipes(urlParams, offset)
            .then((response) => {
                setRecipes(response.data.results);
            })
    },[offset])

    return (
        <div className="w-full h-80 flex flex-col justify-between overflow-hidden relative mb-12 md:mb-0 md:h-auto md:mt-5">
        <div>
        <h2 className="text-green-800 md:text-2xl text-xl font-extrabold mb-4 md:!leading-[55px]">Vegan Recipes</h2>
        
        <button 
            className="bg-green-500 text-white font-bold py-2 px-4 rounded-full hover:bg-emerald-600"
            onClick={() => setOffset((prev) => prev + 1)}
        >
            Load More
        </button>

        </div>
        <div className="mt-5 flex flex-wrap justify-center gap-4">
            {recipes.map(recipe => (
                <div key={recipe.id}>
                    <Card title={recipe.title} image={recipe.image} id={recipe.id} />
                </div>
            ))}
        </div>
    </div>
    )
}

export default Vegan;