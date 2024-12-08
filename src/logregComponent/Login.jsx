import React, { useContext, useRef } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../Authprovider';
import Swal from 'sweetalert2';
import { sendPasswordResetEmail } from 'firebase/auth';
import { auth } from '../firebase.init';

const Login = () => {
    const emailRef =useRef()
    const{userLogin,users,setPassword,setUser,googleLogin} =useContext(AuthContext)
    const navigate = useNavigate()
    const location = useLocation()
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
   
    const handleSubmit = (event) => {
         event.preventDefault()
         const form = event.target 
         const email =form.email.value
         const password =form.password.value 
        //  console.log(email,password)
         userLogin(email,password)
         .then((result)=> {
            const user = result.user 
            setUser(user) 
            navigate(location?.state? location.state: "/")
            
         })
         .catch((error) => {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: error.message,
            });
         })
    }
   //forget password
    const handleForget = () => {
        const email = emailRef.current.value 
        console.log(email)
        if(!email) {
            return alert('provide a valid email')
        }
        else {
            sendPasswordResetEmail(auth,email)
            .then(() => {
                return alert('Password reset email sent, Please check your email')
            })
            .catch((err) => {
                return alert('error Bad request',err)
            })
        }
    }
    return (
        <div>
            <div className="hero bg-base-200 min-h-screen">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                        <form onSubmit={handleSubmit} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input name='email' ref={emailRef} type="email" placeholder="email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input name='password' type="password" placeholder="password" className="input input-bordered" required />
                                <label className="label">
                                    <a href="#" onClick={handleForget} className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Login</button>
                            </div>
                            <p>Are you register go to <Link className='underline' to="/register">Register</Link> page</p>
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

export default Login;