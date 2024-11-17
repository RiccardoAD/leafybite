// import { useContext, useEffect, useState } from 'react';
// import Navbar from '../../components/Navbar/Navbar';
// import FavoritesContext from '../../FavoritesContext';
// import { Link } from 'react-router-dom';
// import { BsFillTrashFill } from 'react-icons/bs';
// import './Favorites.css';
// import { getRecipeInfo } from '../../api';

// function Favorites() {

//     const { favorite, setFavorite } = useContext(FavoritesContext);
//     const [recipes, setRecipes] = useState([]);
//     const [newrecipes, setNewrecipes] = useState([]);

//     const getRecipe = () => {
//         setRecipes([]);
//         for (let i = 0; i < favorite.length; i++) {
//             const element = favorite[i];
//             getRecipeInfo(element)
//             .then((response) => {
//                 let title = response.data.title;
//                 let image = response.data.image;
//                 let id = response.data.id;
//                 setRecipes(prev => [...prev, {id: id, title: title, image: image}])
//             })
//             .catch((error) => console.log(error))
//         }
//     }

//     useEffect(() => {
//         let uniqueID = [];
//         const getUnique = () => {
//             uniqueID = recipes
//                 .map(e => e['id'])
//                 .map((e, i, final) => final.indexOf(e) === i && i)
//             .filter(e => recipes[e]).map(e => recipes[e])
//             return uniqueID;
//         }
//         console.log(getUnique())
//         setNewrecipes(uniqueID);
//     },[favorite, recipes])

//     useEffect(() => {
//         getRecipe()
//     },[favorite])

//     const saveToLocalStorage = (items) => {
//         localStorage.setItem('favorites-recipes', JSON.stringify(items))
//     }

//     const removeFavorite = (id) => {
//         let index = favorite.indexOf(id);
//         let newFavoriteList = [...favorite.slice(0, index), ...favorite.slice(index + 1)];
//         setFavorite(newFavoriteList);
//         saveToLocalStorage(newFavoriteList);
//     }

//     return (
//         <div>
//             <Navbar />
//             <div className='main-container'>
//             <h2>Favorites</h2>
//             <div className='favorites-cnt'>
//                 {favorite.length !== 0 ? newrecipes.map((recipe) => {
//                 return (
//                     <div key={recipe.id}>
//                         <div className='favorite-page'>
//                             <div className='favorite-info'>
//                                 <Link to={'/recipe/' + recipe.id} style={{ textDecoration: 'none' }}>
//                                     <h3>{recipe.title}</h3>
//                                 </Link>
//                             </div>
//                             <img src={recipe.image} className='favorite-image' alt=''></img>
//                             <div className='favorite-trash' onClick={() => removeFavorite(recipe.id)}><BsFillTrashFill size={"70px"}/>
//                             </div>
//                         </div>
//                     </div>
//                 )
//                 }) : <p className='empty'>No favorites</p>}
//             </div>
//             </div>
//         </div>
//     )
// }

// export default Favorites


import { useEffect, useState } from 'react';
import Navbar from '../../components/Navbar/Navbar';
import { Link } from 'react-router-dom';
import { BsFillTrashFill } from 'react-icons/bs';
import './Favorites.css';
import { getRecipeInfo } from '../../api';
import { useSelector, useDispatch } from 'react-redux';
import { removeFavorite, setFavorites } from '../../redux/favoritesSlice';

function Favorites() {
    const favorite = useSelector((state) => state.favorites.favorite);
    const dispatch = useDispatch();
    const [recipes, setRecipes] = useState([]);
    const [newrecipes, setNewrecipes] = useState([]);

    const getRecipe = () => {
        setRecipes([]);
        favorite.forEach((element) => {
            getRecipeInfo(element)
            .then((response) => {
                let { title, image, id } = response.data;
                setRecipes((prev) => [...prev, { id, title, image }]);
            })
            .catch((error) => console.log(error));
        });
    };

    useEffect(() => {
        let uniqueID = [];
        const getUnique = () => {
            uniqueID = recipes
                .map((e) => e['id'])
                .map((e, i, final) => final.indexOf(e) === i && i)
                .filter((e) => recipes[e])
                .map((e) => recipes[e]);
            return uniqueID;
        };
        setNewrecipes(getUnique());
    }, [favorite, recipes]);

    useEffect(() => {
        getRecipe();
    }, [favorite]);

    const handleRemoveFavorite = (id) => {
        dispatch(removeFavorite(id));
    };

    return (
        <div>
            <Navbar />
            <div className="flex flex-col h-full">
    <h2 className=" flex justify-between ml-5  text-green-800 md:text-2xl text-xl font-extrabold mb-4 md:!leading-[55px]">Favorites</h2>
    <div className="favorites-cnt mt-12 flex flex-col h-full">
        {favorite.length !== 0 ? (
            newrecipes.map((recipe) => (
                <div
                    key={recipe.id}
                    className="w-[500px] sm:w-[90%] mx-auto h-[90px] sm:h-[100px] rounded-[20px] overflow-hidden mb-5 flex justify-between"
                >
                    <div className="favorite-info bg-[#00cc77ba] rounded-[15px] w-[70%] sm:w-[60%] text-white p-4 sm:p-2 mr-2 flex items-center">
                        <Link to={'/recipe/' + recipe.id} className="text-white font-semibold no-underline">
                            <h3 className="text-white font-semibold sm:text-[1.2rem]">{recipe.title}</h3>
                        </Link>
                    </div>
                    <img
                        src={recipe.image}
                        className="favorite-image h-full w-auto sm:w-[100px] object-cover rounded-[20px]"
                        alt=""
                    />
                    <div
                        className="favorite-trash bg-[#00cc77ba] rounded-[15px] w-[10%] sm:w-[15%] text-white p-4 sm:p-2 ml-2 flex items-center justify-center hover:bg-[#a6ffda] cursor-pointer"
                        onClick={() => handleRemoveFavorite(recipe.id)}
                    >
                        <BsFillTrashFill size={"70px"} className="sm:w-[40px] sm:h-[40px]" />
                    </div>
                </div>
            ))
        ) : (
            <p className="empty text-center  ml-5  text-green-800 md:text-2xl text-xl font-extrabold mb-4 md:!leading-[55px] ">No favorites</p>
        )}
    </div>
</div>
        </div>
    );
}

export default Favorites;