
import {
  
   Route ,
  
   Routes, BrowserRouter } from "react-router-dom";
 import Home from './pages/Home';
 import Searched from './pages/Searched/Searched';
import Recipe from "./pages/Recipe/Recipes.jsx";
// import Navbar from '../src/components/Navbar/Navbar.jsx';
import Footer from '../src/components/Footer/Footer.jsx';

 import Favorites from './pages/Favorites/Favorites';
import Meals from "./pages/Meals.jsx";
import './App.css';

//  import { FavoritesProvider } from './FavoritesContext';

function App() {

  return (
   //   <FavoritesProvider>
        <BrowserRouter
        //  basename={process.env.PUBLIC_URL}
         >
        {/* <Navbar /> */}
          <Routes>
             <Route exact path="/" element={<Home />} />
            <Route path="/searched/:search" element={<Searched />} />
            <Route path="/recipe/:name" element={<Recipe />} /> 
             <Route path="/favorites/" element={<Favorites />} /> 
             <Route path="/meals" element={<Meals />} />
          </Routes>
          <Footer />
        </BrowserRouter>
   //   </FavoritesProvider>
  );
}

export default App;