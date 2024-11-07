import React, { useState } from 'react';
import { FiSearch } from 'react-icons/fi';
import { useNavigate } from 'react-router-dom';
import './Searchbar.css';

function Searchbar() {

    const [input, setInput] = useState("");
    const navigate = useNavigate();

    const submitHandler = (e) => {
        e.preventDefault();
        navigate('/searched/' + input);
    };

    return (
        // <div className='searchbar'>
        //     <form className='search-container' onSubmit={submitHandler}>
        //         <input  className='search' placeholder='Cerca' type="text" value={input} onChange={(e) => setInput(e.target.value)}/>
        //         <FiSearch className='cerca'/>
        //     </form>
        // </div>
        <div className="w-full mx-auto mt-8 flex justify-center">
        <form className="bg-white rounded-lg w-[150px] px-2 flex items-center" onSubmit={submitHandler}>
          <input
            className="bg-transparent   w-full h-full p-2 font-semibold text-[#23B791] focus:outline-none"

            placeholder="Serach Recipes"
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
          <FiSearch className="w-5 h-[90%] text-[#23B791]" />
        </form>
      </div>
//         <div className="flex justify-center w-1/2 items-center mx-auto">
//   <form className="block w-full my-4 relative" onSubmit={submitHandler}>
//     <input
//       type="text"
//       placeholder="Cerca le tue ricette vegetariane o vegane"
//       value={input}
//       onChange={(e) => setInput(e.target.value)}
//       className="w-full border-b-2 border-gray-300 focus:outline-none focus:border-green-400 text-md font-raleway text-gray-600"
//     />
//     <button
//       type="submit"
//       className="ml-4 bg-green-400 text-white px-4 py-2 rounded transition-colors duration-150 hover:bg-green-600 absolute right-0 top-0"
//     >
//       <FiSearch />
//     </button>
//   </form>
// </div>

        
    )
}

export default Searchbar