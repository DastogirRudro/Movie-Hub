import React from 'react';

const Gotdetails = ({loader,moviedata,setMoviedata}) => {
    const { _id,title, isCompleted, poster,email, genre, duration, rating, release, summery } = loader
    const handleDelete = (id)=> {
        //    console.log(id)
           fetch(`http://localhost:8000/users/${id}`,{
            method:"DELETE"
           })
           .then((res)=> res.json())
           .then((result)=> {
            // console.log(result)
            const newData = moviedata.filter((movie)=> id!==movie._id) 
            setMoviedata(newData)
           })
    }
    const handleUpdatedmovie = (id)=> {
        //    console.log(id)
           fetch(`http://localhost:8000/users/${id}`,{
            method:"PATCH"
           })
           .then((res)=> res.json())
           .then((result)=> {
             console.log(result)
             const newData = moviedata.map((movie) => movie._id === id?{...movie,isCompleted:true}:movie)
             setMoviedata(newData)
           })
    }
    return (
        <div>
            <div className="card bg-base-100 max-w-80 m-2 my-4 shadow-xl">
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
                    <p>Summery: {summery}</p>
                    <p className='font-bold'>The man who posted this: {email}</p>

                    <div className="card-actions">
                        <button onClick={()=>handleDelete(_id)} className="btn btn-primary">Delete</button>
                        <button onClick={()=>handleUpdatedmovie(_id)} className="btn btn-primary">{isCompleted ? 'Favorited':'Add to Favorite'}</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Gotdetails;