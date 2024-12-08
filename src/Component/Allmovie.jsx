import React, { useEffect, useState } from 'react';
import { NavLink, useLoaderData } from 'react-router-dom';
import Gotallmovie from './Gotallmovie';

const Allmovie = () => {
    const loaders = useLoaderData()
    // console.log(loaders)
    const [search,setSearch] =useState()
    useEffect(()=> {
      fetch(`https://assignback.vercel.app/us?searchParams=${search}`)
      .then((res) => res.json())
      .then((data)=> {
        console.log(data)
      })
    },[search])
   
    return (
     <div>
           <div className="my-6 flex items-center justify-center">
                <input
                    className="w-1/2 py-2 px-2 border-2 rounded-xl"
                    type="text"
                    onChange={(e) => setSearch(e.target.value)}
                    name="search"
                    placeholder="Search movies backend"
                />
            </div>
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