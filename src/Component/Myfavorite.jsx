import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Getfavorite from './Getfavorite';

const Myfavorite = () => {
    const data = useLoaderData()
    console.log(data)
    return (
        <div>
             <div className='md:grid justify-center mx-auto items-center grid-cols-3 gap-5 shadow-lg border-2 rounded-lg bg-gray-300 my-4 m-1 py-8 px-4'>
            {
                data.map((loader)=> (
                    <Getfavorite loader={loader}></Getfavorite>
                ))
            }
        </div>
        </div>
    );
};

export default Myfavorite;