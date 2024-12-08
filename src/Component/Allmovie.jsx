import React, { useEffect, useState } from 'react';
import { NavLink, useLoaderData } from 'react-router-dom';
import Gotallmovie from './Gotallmovie';

const Allmovie = () => {
    const loaders = useLoaderData()
    console.log(loaders)
    
    
   
    return (
     <div>
        
           <div className='md:grid justify-center items-center grid-cols-3 gap-5 shadow-lg border-2 rounded-lg bg-gray-300 my-4 m-1 py-8 px-4'>
            {
                loaders.map((loader)=> (
                    <Gotallmovie loader={loader}></Gotallmovie>
                ))
            }
        </div>
        {/* <NavLink to={"/allmovie"}><button className='btn'> See All Movies</button></NavLink> */}
     </div>
    );
};

export default Allmovie;