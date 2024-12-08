import React from 'react';

const Bestone = () => {
    return (
        <div className='bg-slate-400 container rounded-xl my-2 mx-auto py-16 px-4'>
            <div>
                <div className='my-10'>
                    <p className='font-bold text-center text-3xl text-purple-900'>Here, We Will See You The Best Movie in That Website</p>
                </div>
            </div>
            <div className='md:flex justify-center items-center mx-auto gap-12'>
                <div className='flex items-center rounded-xl justify-center w-1/3'>
                    <img src="https://i.ibb.co.com/rcnq6L6/MV5-BMjg5-Mz-Fk-Nj-It-MGI3-YS00-Mz-U5-LTlm-YWMt-ZTli-NGUx-NTE2-OTI5-Xk-Ey-Xk-Fqc-Gc-V1.jpg" alt="" className='shadow-lg rounded-xl border-2' />
                </div>
                <div className='w-1/2 space-y-8'>
                    <p><span className='font-bold text-lg text-black'>title: </span>Action/Thriller</p>
                    <p><span className='font-bold text-lg text-black'>Duration: </span>3hr 21 min</p>
                    <p><span className='font-bold text-lg text-black'>IMDB rating: </span>6.1</p>
                    <p><span className='font-bold text-lg text-black'>Release Date: </span>2023</p>
                    <p><span className='font-bold text-lg text-black'>Directed by: </span> Sandeep Raddy Vanga</p>
                    <p><span className='font-bold text-lg text-black'>Produced by: </span>T-series</p>
                    <p><span className='font-bold text-lg text-black'>Produced by: </span>Ranbir kapor, Anil kapor, Bobby Deol, Rashmika Mandanna, Tripti demri</p>

                </div>
            </div>
            <div className='my-9'>
                <p className='text-center font-bold text-4xl text-purple-900'>Movie Trailer</p>
                <div className='flex items-center justify-center my-8 '>
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/8FkLRUJj-o0?si=yndhPCLXBUkjIqmB" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" className='rounded-lg' referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                </div>
                <p className='text-center font-bold text-4xl text-purple-900'>You Can Watch</p>
            </div>
        </div>
    );
};

export default Bestone;