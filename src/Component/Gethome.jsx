import React from 'react';
import { Link } from 'react-router-dom';

const Gethome = ({loader}) => {
    const { title, poster,email, genre, duration, rating, release, summery } = loader
    return (
        <div>
            <div className="card my-4 bg-base-100 max-w-80 shadow-xl">
                <figure className="px-6 pt-10">
                    <img 
                        src={poster}
                        alt="img"
                        className="rounded-xl max-h-64" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title font-bold text-2xl text-purple-900">{title}</h2>
                    <p className='text-purple-800 font-semibold'>Genre: {genre}</p>
                    <p className='text-purple-800 font-semibold'>Duration: {duration}</p>
                    <p className='text-purple-800 font-semibold'>Release Date: {release}</p>
                    <p className='text-purple-800 font-semibold'>Rating: {rating}</p>

                    <div className="card-actions">
                        <button className="btn btn-primary"><Link to={`/seedetails/${email}`}>
                        View Details </Link></button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Gethome;