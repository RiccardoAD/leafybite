import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
// import FavoritesContext from '../../FavoritesContext';
import { useSelector, useDispatch } from 'react-redux';
import { addFavorite, removeFavorite } from '../../redux/favoritesSlice';

import fullHeart from '../../assets/cuore-pieno.png';
import emptyHeart from '../../assets/cuore-vuoto.png';
import './Card.css';

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
        <div className='card' key={id}>
            {/* {!heartIcon ? <img src={emptyHeart} alt="<3" className='favorite'
             onClick={() => {addFavorite(id, heartIcon); toggle()}}/> : isInFavorites()} */}

{!heartIcon ? (
                <img
                    src={emptyHeart}
                    alt="<3"
                    className='favorite'
                    onClick={handleAddFavorite}
                />
            ) : (
                <img
                    src={fullHeart}
                    alt="like"
                    className='favorite blue'
                    onClick={handleRemoveFavorite}
                />
            )}



            <Link to={'/recipe/' + id}>
                <img src={image} alt='' className='card-image'/>
                <div className='card-info-cnt'>
                    <p className='card-title'>{title}</p> 
                </div>
            </Link>
        </div>
    )
}

export default Card;