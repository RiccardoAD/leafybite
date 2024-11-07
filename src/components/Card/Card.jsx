import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
// import FavoritesContext from '../../FavoritesContext';
import { useSelector, useDispatch } from 'react-redux';
import { addFavorite, removeFavorite } from '../../redux/favoritesSlice';

import fullHeart from '../../assets/cuore-pieno.png';
import emptyHeart from '../../assets/cuore-vuoto.png';


function Card({ title, image, id }) {

    // const { addFavorite }  = useContext(FavoritesContext);
    // const { removeFavorite }  = useContext(FavoritesContext);
    // const { favorite } = useContext(FavoritesContext);

    const favorite = useSelector((state) => state.favorites.favorite);
    const dispatch = useDispatch(); 



    const [heartIcon, setHeartIcon] = useState();

    useEffect(() => {
        const check = favorite.includes(id);
        if (check) {
        setHeartIcon(true)
        }
    }, [favorite,id])

    const handleAddFavorite = () => {
        dispatch(addFavorite(id));
        setHeartIcon(true);
    };

    const handleRemoveFavorite = () => {
        dispatch(removeFavorite(id));
        setHeartIcon(false);
    };


    // const isInFavorites = () => {
    //         return (
    //             <img src={fullHeart} alt="like" className='favorite blue' onClick={() => {removeFavorite(id, heartIcon); toggle()}}/>
    //         )
    // }

    // const toggle = () => {
    //     isInFavorites();
    //     setHeartIcon(!heartIcon);
    // }

    return (
        <div>

        <div  className="relative  rounded-lg w-56 h-60 m-2 overflow-hidden" key={id}>
            {/* {!heartIcon ? <img src={emptyHeart} alt="<3" className='favorite'
             onClick={() => {addFavorite(id, heartIcon); toggle()}}/> : isInFavorites()} */}

{!heartIcon ? (
                <img
                    src={emptyHeart}
                    alt="<3"
                    className="absolute top-5 right-5 z-10 w-8 h-8 p-1 bg-emerald-500 bg-opacity-70 border-none rounded-md flex justify-center items-center"
                    onClick={handleAddFavorite}
                />
            ) : (
                <img
                    src={fullHeart}
                    alt="like"
                    className="absolute top-5 right-5 z-10 w-8 h-8 p-1 bg-red-500 border-none rounded-md flex justify-center items-center"
                    onClick={handleRemoveFavorite}
                />
            )}



            <Link to={'/recipe/' + id}>
                <img src={image} alt='' className="w-full h-full object-cover"/>
                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 w-[90%] bg-emerald-500 bg-opacity-70 rounded-lg p-2 text-white flex flex-col justify-center">
                    <p className="font-bold text-center">{title}</p> 
                </div>
            </Link>
        </div>
        </div>
    )
}

export default Card;