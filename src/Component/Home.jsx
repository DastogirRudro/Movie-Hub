import 'swiper/css'; // Import Swiper styles
import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';



// import required modules
import { Navigation } from 'swiper/modules';
import { Link, NavLink, useLoaderData } from 'react-router-dom';
import Gethome from './Gethome';
const Home = () => {
    const handleMoviee = (event) => {
        event.preventDefault()
    }
    const useloader = useLoaderData()
    console.log(useloader)
    const [isDarkMode, setIsDarkMode] = useState(false); // State to manage theme

    // Toggle theme
    const toggleTheme = () => {
        setIsDarkMode(!isDarkMode);
        document.documentElement.classList.toggle('dark'); // Toggles the dark class on the root element
    };
    return (
        <div className={`min-h-screen ${isDarkMode ? 'bg-gray-900 text-white' : 'bg-gray-100 text-black'}`}>
            <div className="flex justify-end p-4">
                <button 
                    onClick={toggleTheme}
                    className="btn bg-indigo-600 text-white hover:bg-indigo-800"
                >
                    {isDarkMode ? 'Light Mode' : 'Dark Mode'}
                </button>
            </div>
            <div className='mx-auto mb-12 shadow-lg'>
                <>
                    <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
                        <SwiperSlide>
                            <div className="card max-w-2xl mx-auto bg-base-100 w-96 shadow-xl">
                                <div className="card-body">
                                    <h2 className="card-title font-bold text-purple-950">Hindi</h2>
                                    <p className='text-purple-600'>Do you like Hindi Movies?</p>
                                </div>
                                <figure>
                                    <img className='max-h-72 mb-2'
                                        src="https://i.ibb.co.com/rcnq6L6/MV5-BMjg5-Mz-Fk-Nj-It-MGI3-YS00-Mz-U5-LTlm-YWMt-ZTli-NGUx-NTE2-OTI5-Xk-Ey-Xk-Fqc-Gc-V1.jpg"
                                        alt="Shoes" />
                                </figure>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="card max-w-2xl mx-auto bg-base-100 w-96 shadow-xl">
                                <div className="card-body">
                                    <h2 className="card-title font-bold text-purple-900">Bengali</h2>
                                    <p className='text-purple-800'>Do you like bengali movie?</p>
                                </div>
                                <figure>
                                    <img className='max-h-72 mb-2'
                                        src="https://i.ibb.co.com/60p6s4d/hqdefault.jpg"
                                        alt="Shoes" />
                                </figure>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="card max-w-2xl mx-auto bg-base-100 w-96 shadow-xl">
                                <div className="card-body">
                                    <h2 className="card-title font-bold text-purple-900">English</h2>
                                    <p className='text-purple-500'>Do you like English Movie?</p>
                                </div>
                                <figure>
                                    <img className='max-h-72 mb-2'
                                        src="https://i.ibb.co.com/PjyBF0c/m4g6tqmop8.jpg"
                                        alt="Shoes" />
                                </figure>
                            </div>
                        </SwiperSlide>
                    </Swiper>
                </>
            </div>


            {/* allmovies updated here */}
            <div className='my-4 pl-5 container mx-auto py-6 grid grid-rows-1 md:grid-col-2 lg:grid-cols-3 sm:grid-cols-1 justify-center items-center gap-2 shadow-xl rounded-lg border-2 bg-gray-200'>
                {
                    useloader.map((loader) => (<Gethome loader={loader}></Gethome>))
                }
            </div>
            <div className='flex items-center justify-center mb-10'><button className='btn bg-green-600 w-1/2 mx-auto'><Link to={"/allmovie"}>All Movie Page</Link>
            </button></div>



            {/* Have you any objection for that */}
            <div className="hero my-8 bg-base-200 min-h-screen">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-center lg:text-left w-1/3 m-4">
                        <h1 className="text-5xl font-bold text-fuchsia-600">Any Query or Objetion</h1>
                        <p className="py-6 text-fuchsia-500">
                             In our web we are trying to best User interface if you have any objection or any query just post this on that we are trying to our best to resolve our problem so feel free to complain us
                        </p>
                    </div>
                    <div className="card bg-base-100 w-full max-w-sm py-8 shrink-0 shadow-2xl">
                        <form onSubmit={handleMoviee} className="card-body py-8">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Query</span>
                                </label>
                                <input type="text" placeholder="Know something" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Any Problem?</span>
                                </label>
                                <input type="text" placeholder="Any Problem in that site" className="input input-bordered" />
                               
                            </div>
                            <div className="flex items-center justify-center form-control mt-6">
                                <NavLink to={"/allmovie"}><button className="btn btn-primary">Submit Here</button></NavLink>
                            </div>
                        </form>
                    </div>
                </div>
            </div>

            {/* Owner setion is here */}
            <div>
                <div className='mb-4'>
                    <div className='border-y-2 my-2 py-4 border-spacing-8 border-amber-900'>
                        <p className='text-3xl font-bold text-center text-pink-700'>Owner section</p>
                    </div>
                    <div className='flex flex-col space-y-8 justify-center items-center'>
                        <div className='' >
                            <img className='rounded-xl shadow-lg max-h-64' src="https://i.ibb.co.com/8ssKcHF/f2309c6d-bcae-4cc5-a44d-3b130f1e6230.jpg" alt="" />
                        </div>
                        <div className='w-1/2 space-y-8 text-center'>
                            <p><span className='font-bold text-lg text-pink-900'>Name: </span>Akash</p>
                            <p><span className='font-bold text-lg text-pink-900'>job: </span>Developer</p>
                            <p><span className='font-bold text-lg text-pink-900'>passion: </span>Watching Movie</p>
                            <p className='pb-4'><span className='font-bold text-lg text-pink-900'>Develop this web: </span>2020</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;
