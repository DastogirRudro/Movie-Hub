import React from 'react';
import { Link } from 'react-router-dom';

const Gotallmovie = ({ loader }) => {
    const { title, poster,email, genre, duration, rating, release, summery } = loader
    return (
        <div>
            <div className="card bg-base-100 max-w-80 m-2 shadow-xl">
                <figure className="px-10 pt-10">
                    <img 
                        src={poster}
                        alt="img"
                        className="rounded-xl max-h-64" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">{title}</h2>
                    <p>Genre: {genre}</p>
                    <p>Duration: {duration}</p>
                    <p>Release Date: {release}</p>
                    <p>Rating: {rating}</p>

                    <div className="card-actions">
                        <button className="btn btn-primary"><Link to={`/seedetails/${email}`}>
                            View Details </Link></button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Gotallmovie;
