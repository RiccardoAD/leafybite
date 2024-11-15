import  { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Card from '../../components/Card/Card';
import Navbar from '../../components/Navbar/Navbar';
import { getAllRecipes } from "../../api";
// import './Searched.css';

function Serched() {
    
    const [searched, setSearched] = useState([]);
    let params = useParams();

    useEffect(() => {
        getAllRecipes(params.search)
            .then((response) => {
                setSearched(response.data.results);
            })
    },[params]);

    return (
        <div>
            <Navbar />
            <div className='main-container max-w-[1000px] mx-auto '>
                <div className='flex justify-between w-full mb-4'>
                    <h2 className="text-green-800 md:text-2xl text-xl font-extrabold mb-4 md:!leading-[55px]"  >{params.search} recipes</h2>
                </div>
                <div className='flex flex-wrap justify-center mt-2 w-full h-full'>
                    {searched.map((item) => {
                        return (
                            <Card title={item.title} image={item.image} key={item.id} id={item.id}/>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default Serched;
