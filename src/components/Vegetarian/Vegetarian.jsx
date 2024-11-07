import  { useEffect, useState } from 'react';
import Card from '../Card/Card';
import './Vegetarian.css';
import { getRecipes } from "../../api";

function Vegetarian() {

    const [recipes, setRecipes] = useState([]);
    const [offset, setOffset] = useState(0);

    const urlParams = 'vegetarian';

    useEffect(() => {
        getRecipes(urlParams, offset)
            .then((response) => {
                setRecipes(response.data.results);
            })
    },[offset])
    
    return (
    
    <div className="w-full grid md:grid-cols-2 items-center  min-h-[320px] flex flex-col justify-between overflow-hidden relative">
    
    <div>

    <h2 className="text-green-800 md:text-2xl text-xl font-extrabold mb-4 md:!leading-[55px]">Vegetarian Recipes</h2>
    <button className= "ml-4 bg-green-500 text-white font-bold py-2 px-4 rounded-full hover:bg-emerald-600" onClick={() => setOffset((prev) => prev + 1)}>
        Load More
    </button>
    </div>
    <div className="mt-4 flex flex-wrap justify-center lg:justify-between gap-4">
        {recipes.map((recipe) => (
            <div key={recipe.id} className="w-full lg:w-1/4 p-2">
                <Card title={recipe.title} image={recipe.image} id={recipe.id} recipes={recipes} />
            </div>
        ))}
    </div>
</div>
    )
}

export default Vegetarian;
