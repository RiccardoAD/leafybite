import React from 'react'
import logo from '../../assets/SaladLogo.png'
import { Link } from 'react-router-dom'
import './Navbar.css'
// import  FavoritesContext  from '../../FavoritesContext';
// import { useContext } from 'react';
import { useSelector } from 'react-redux'; 
  import Searchbar from '../Searchbar/Searchbar';
function Navbar() {
  // const { favorite } = useContext(FavoritesContext); 

  const favorite = useSelector((state) => state.favorites.favorite);

  return (
    <div className='bg-gradient-to-r from-green-600 to-green-500 w-full h-16 text-white flex items-center px-10 sticky top-0 z-40'>
            <Link to={'/'} className="flex items-center no-underline">
                <div className="flex items-center text-white">
                    <img src={logo} alt="logo" className='w-8 mr-2'/>
                    <h3 className="font-semibold" >Leafy<span className="font-bold">Bite</span></h3>
                </div>
            </Link>
             {/* <Searchbar />  */}
            <Link to={'/favorites/'} className="ml-auto no-underline hover:underline">
                <h4 className="font-medium">Favorites: <span>{favorite.length}</span></h4>
            </Link> 
            </div>
  )
}

export default Navbar
