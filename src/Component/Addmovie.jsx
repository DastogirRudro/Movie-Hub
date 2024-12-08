
import React, { useContext, useState } from 'react';
import { Rating } from 'react-simple-star-rating';
import { AuthContext } from '../Authprovider';
import Swal from 'sweetalert2'

    const Addmovie = () => {
        const {users} = useContext(AuthContext)
       
        const [rating, setRating] = useState(0); // Initial rating state
        const [error, setError] = useState('')
        const [title,setTitle] =useState('')
        const[duration,setDuration] =useState('')
        const[summery,setSummery] = useState('')
        const [posterError, setPosterError] = useState('');
        // Handle rating change
        const handleRating = (rate) => {
            setRating(rate); // Set the new rating value
            setError('');
        };
        const handleSubmit =(event) => {
            event.preventDefault()
            if (rating === 0) {
                setError('Rating is required. Please select a rating.');
                return;
            }
            const form = event.target 
            const title =form.title.value 
            if(title.length < 2) {
                setTitle('title must be 2 character')
                return
            }
            const email =form.email.value 
            const poster =form.poster.value
            const validImageExtensions = /\.(jpg|jpeg|png|gif|webp)$/i;
            if (!validImageExtensions.test(poster)) {
                setPosterError('Poster must be a valid image link (e.g., ending with .jpg, .png).');
                return;
            } 
            const genre =form.genre.value 
            const duration = +form.duration.value 
            if(duration<60) {
               setDuration('Duration must be greater than 60 minutest')
               return
            }
            const release = +form.release.value 
            const summery =form.summery.value 
            if(summery.length <10 ) {
                setSummery('at least 10 character here')
                return
            }
            console.log(title,email,poster,genre,duration,rating, release,summery)
            const data = {
                title: title,
                email:email,
                poster:poster,
                genre:genre,
                duration:duration,
                rating:rating,
                release:release,
                summery:summery,
                isCompleted: false
            }
           fetch('http://localhost:8000/users',{
            method:"POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
           })
           .then((res) => res.json())
           .then((result)=> {
            console.log(result)
            Swal.fire({
                title: "Good job!",
                text: "Data submitted!",
                icon: "success"
              });
           })
        }


        return (
            <div className='bg-orange-300 rounded-lg shadow-sm mb-12 py-12 p-2'>
                <div>
                    <p className='text-center text-4xl font-bold text-teal-800 mb-6'>Add all your movies information here </p>
                </div>
                <form onSubmit={handleSubmit} action="">
                    <div className=' w-full mx-auto md:flex gap-10 items-start justify-center'>
                        <div className='w-1/2'>
                            <label className="form-control w-full max-w-xs">
                                <div className="label">
                                    <span className="label-text">What is Movie Poster?</span>
                                </div>
                                <input type="text" name='poster' placeholder="Movie Poster" className="input input-bordered w-full max-w-xs" />
                                {posterError && <p className="text-sm text-red-600">{posterError}</p>}
                            </label>
                            <label className="form-control w-full max-w-xs">
                                <div className="label">
                                    <span className="label-text">What is Movie Title?</span>
                                </div>
                                <input type="text" name='title' placeholder="Movie title" className="input input-bordered w-full max-w-xs" required />
                                {title && <p className='text-red-500 text-sm'>{title}</p>}
                            </label>
                            <label className="form-control w-full max-w-xs">
                                <div className="label">
                                    <span className="label-text">What is your email?</span>
                                </div>
                                <input type="email" value={users.email} name='email' placeholder="email" className="input input-bordered w-full max-w-xs" required />
                            </label>
                            <label className="form-control w-full max-w-xs">
                                <div className="label">
                                    <span className="label-text">What is the Genre?</span>
                                </div>
                                <select
                                    className="select select-bordered w-full max-w-xs" name='genre'
                                    required
                                >
                                    <option value="" disabled selected>
                                        Select Genre
                                    </option>
                                    <option value="Comedy">Comedy</option>
                                    <option value="Horror">Horror</option>
                                    <option value="Thriller">Thriller</option>
                                    <option value="Thriller">Suspense</option>
                                </select>
                            </label>
                            <label className="form-control w-full max-w-xs">
                                <div className="label">
                                    <span className="label-text">What is your movie Duration?</span>
                                </div>
                                <input type="number" name='duration' placeholder="Duration" className="input input-bordered w-full max-w-xs" required />
                                {duration && <p className='text-red-600 text-sm'>{duration}</p>}
                            </label>
                        </div>
                        <div className=''>
                            <label className="form-control w-full max-w-xs">
                                <div className="label">
                                    <span className="label-text">When did the movie release?</span>
                                </div>

                                <select name='release' className="select select-bordered w-full max-w-xs mt-2" required>
                                    <option value="" disabled selected>Select Year</option>
                                    {Array.from({ length: 2024 - 2000 + 1 }, (_, i) => 2024 - i).map((year) => (
                                        <option key={year} value={year}>{year}</option>
                                    ))}
                                </select>
                            </label>
                            <label className="form-control w-full max-w-xs">
                            <div className="label">
                                <span className="label-text">What is the movie rating?</span>
                            </div>
                            <Rating
                                onClick={handleRating}
                                ratingValue={rating} // Current selected rating
                                size={60} // Size of stars
                                label // Show rating value
                                transition
                                fillColor="black"
                                emptyColor="gray"
                                className="mt-2" 
                                required
                            />
                             {error && <p className="text-red-600 mt-2">{error}</p>}
                        </label>
                            <label className="form-control w-full max-w-xs">
                                <div className="label">
                                    <span className="label-text">What is the summery of movie?</span>
                                </div>
                                <textarea className='rounded-lg px-2' rows='2' cols='28' placeholder='Summery' name='summery' required></textarea>
                                {summery && <p className='text-sm text-red-500'>{summery}</p>}
                            </label>
                        </div>
                    </div>
                    <div>
                    <input type="submit" className='btn flex items-center justify-center h-1 text-center mx-auto w-1/2 border-2 border-black my-4' value="Submit Here" />
                    </div>
                </form>
            </div>
        );
    };
    export default Addmovie;