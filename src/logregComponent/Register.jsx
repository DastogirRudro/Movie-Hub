import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../Authprovider';
import Swal from 'sweetalert2';

const Register = () => {
    const {createUser,setUser,updateUserProfile,googleLogin} = useContext(AuthContext)
    const [error,setError] = useState([])
    const navigate = useNavigate()
    const handleGoogleLogin = () => {
        googleLogin()
            .then((result) => {
                const user = result.user;
                setUser(user);
                navigate("/");
            })
            .catch((error) => {
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: error.message,
                });
            });
    };
    const handleSubmit = (event)=> {
        event.preventDefault()
        const form = event.target 
        const name =form.name.value 
        const email =form.email.value 
        const photo =form.photo.value 
        const password =form.password.value 
          // Password validation
          const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z]).{6,}$/;
          if (!passwordRegex.test(password)) {
              setError("Password must be six Character One upper case and One lower case");
              return;
          }
        console.log(name,email,photo,password)
        createUser(email,password)
        .then((result) => {
           const user = result.user
           console.log(user)
           updateUserProfile({displayName:name,photoURL:photo}) 
           setUser(user)
           navigate("/")
        })
        .catch((error) => {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: error.message,
            });
        })
    }
    
    
    return (
        <div>
            <div className="hero bg-base-200">
                <div className="hero-content w-1/2 flex-col lg:flex-row-reverse">
                    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                        <form onSubmit={handleSubmit} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span  className=" label-text">Name</span>
                                </label>
                                <input type="text" name='name' placeholder="Name" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" placeholder="email" className="input input-bordered" name='email' required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Photo</span>
                                </label>
                                <input type="text" name='photo' placeholder="photo" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" name='password' placeholder="password" className="input input-bordered" required />
                                <label className="label">
                                    {
                                        error && (<p className='text-red-600 text-sm'>{error}</p>)
                                    }
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Register</button>
                            </div>
                            <p>Are you register go to <Link className='underline' to="/login">Login</Link> page</p>
                            <button className="btn btn-outline w-1/2 mx-auto btn-primary" onClick={handleGoogleLogin}>
                                Sign Up with Google
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;