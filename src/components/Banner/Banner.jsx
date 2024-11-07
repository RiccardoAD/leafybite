import React from 'react'
import Searchbar from '../Searchbar/Searchbar'
function Banner() {
  return (
   <div className="font-sans max-w-6xl max-md:max-w-md mx-auto mb-4">
      <div className="grid md:grid-cols-2 items-center md:gap-8 gap-6">
        <div className="max-md:order-1 max-md:text-center">
          <p className="text-sm font-bold text-green-600 mb-2"><span className="rotate-90 inline-block mr-2">|</span> leafybite</p>
          <h2 className="text-green-800 md:text-3xl text-3xl font-extrabold mb-4 md:!leading-[55px]"> Discover the best vegetarian recipes</h2>
          <p className="mt-4 text-base text-gray-600 leading-relaxed">Embark on a gastronomic journey with our curated dishes. Elevate your dining experience today.</p>
          <div className="mt-8 space-x-4">
           
          <p className="mt-4 text-base text-gray-600 leading-relaxed">Embark on a gastronomic journey with our curated dishes. Elevate your dining experience today.</p>
           
            </div>

          <hr className="mt-8 border-gray-300" />

          <div className="mt-8 flex  flex-col justify-center ">
            <h4 className="text-green-800 font-bold text-base mb-4">Trusted by teams around the word</h4>
        
          </div>
        </div>
        <div className="lg:h-[650px] md:h-[550px] flex items-center relative max-md:before:hidden before:absolute before:bg-gradient-to-b from-green-500 before:h-full before:w-3/4 before:right-0 before:z-0 after:-z-10">
          <img src="https://images.unsplash.com/photo-1533622597524-a1215e26c0a2?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D%27" className="rounded-md lg:w-3/4 md:w-11/12 z-20 relative" alt="Dining Experience" />
        </div>
      </div>
            <div className='mt-8 flex flex-col justify-center text-center w-full'>
            <h4 className="text-green-500 font-bold text-2xl font-boldtext-base mb-4">Search for your favorites recipes</h4>
            <Searchbar/>
        
            </div>
    </div>
      



    
  )
}

export default Banner
