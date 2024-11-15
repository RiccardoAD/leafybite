
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import  Navbar from '../../components/Navbar/Navbar';
import { getRecipeInfo } from "../../api";
import './Recipe.css';

function Recipe() {

    let params = useParams();
    let searchValue = params.name;
    const [details, setDetails] = useState({});
    const [isLoading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        setLoading(true);
        getRecipeInfo(searchValue)
            .then((response) => {
                setDetails(response.data);
                setLoading(false);
            })
            .catch((err) => {
                setError('Errore nel caricamento dei dettagli della ricetta.');
                setLoading(false);
            });
    }, [searchValue]);

    let diet; 
    if (details.vegan) {
        diet = "Vegan";
    } else if (details.vegetarian) {
        diet = "Vegetarian";
    } else { 
        diet = "";
    }

    if(isLoading) {
        return <div className='loading'>Loading...</div>;
    }

    if (error) {
        return <div className="error">{error}</div>;
    }

    return (
        <div>
             <Navbar /> 
            <div className="text-gray-600 mt-20 mx-auto px-12 max-w-5xl" key={details.id}>

                <h2 className="text-3xl text-emerald-600 font-bold" >{details.title}</h2>

                <div className="flex flex-wrap my-5 space-x-4">{details.diets.map((item) => (
                    <p key={item.id} className="border border-gray-300 rounded-lg px-2 py-1" >{item}</p>
                ))}
                </div>

<div className="bg-gray-100 rounded-2xl my-10 p-5 flex flex-col md:flex-row">
        {diet && <p className="absolute bg-emerald-600 text-white font-medium rounded-lg px-2 py-1 mb-2">{diet}</p>}
        <img src={details.image} alt="immagine" className="w-full md:w-72 rounded-xl object-cover mb-5 md:mb-0" />

        <div className="md:ml-12 text-gray-400">
            <div className="border border-gray-300 rounded-lg flex items-center h-10 my-5 px-3">
                <p className="font-semibold text-gray-500"><span className="font-bold">Time</span> {details.readyInMinutes} <span>min</span></p>
                <p className="ml-4 font-semibold text-gray-500"><span className="font-bold">Servings</span> {details.servings}</p>
            </div>

            <div className="ingredients mb-5">
                <h3 className="text-emerald-600 font-bold mb-2">Ingredients</h3>
                <ul className="list-disc ml-5">
                    {details.extendedIngredients.map((ingredients) => (
                        <li key={ingredients.id}>{ingredients.original}</li>
                    ))}
                </ul>
            </div>
        </div>
    </div>

    <p className="my-5" dangerouslySetInnerHTML={{ __html: details.summary }}></p>

    <div className="instructions mt-10">
    <h3 className="text-emerald-600 font-bold mb-5">Instructions</h3>

               
                        {/* {details.analyzedInstructions.map(el => {
                            return el.steps.map(step => {
                                return (
                                    <div className='instructions-container'>
                                        <div className='number-cnt'>
                                            <p className='number'>{step.number}</p>
                                        </div>
                                        <p key={step.number}>{step.step}</p>
                                    </div>
                                )
                            })
                        })} */}
                        {details.analyzedInstructions.map((el, instructionIndex) => (
                        el.steps.map((step, stepIndex) => (
                            <div className="instructions-container" key={`step-${instructionIndex}-${stepIndex}`}>
                                <div className="number-cnt">
                                    <p className=" w-8 h-8 p-2 rounded-full flex items-center justify-center text-white font-medium text-lg">{step.number}</p>
                                </div>
                                <p>{step.step}</p>
                            </div>
                        ))
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Recipe
