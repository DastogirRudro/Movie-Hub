import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Gotdetails from './Gotdetails';

const Seedetails = () => {
    const loaderss = useLoaderData()

    const[moviedata,setMoviedata] = useState(loaderss)
    return (
        <div>
             <div className='grid justify-center items-center md:grid-cols-2 lg:grid-cols-3 gap-5 shadow-lg border-2 rounded-lg bg-gray-300 my-4 m-1 py-8 px-4'>
            {
                moviedata.map((loader)=> (
                    <Gotdetails loader={loader} moviedata={moviedata} setMoviedata={setMoviedata}></Gotdetails>
                ))
            }
        </div>
            
        </div>
    );
};

export default Seedetails;