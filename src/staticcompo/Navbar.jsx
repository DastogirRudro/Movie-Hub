import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { AuthContext } from '../Authprovider';

const Navbar = () => {
    const { users, logOut } = useContext(AuthContext)
    const link = <>
        <li className='mx-1 text-center sm:my-2'><NavLink to={"/"}>Home</NavLink></li>
        <li className='mx-1 text-center sm:my-2'><NavLink to={"/allmovie"}>All Movies</NavLink></li>
        <li className='mx-1 text-center sm:my-2'><NavLink to={"/addmovie"}>Add Movie</NavLink></li>
        <li className='mx-1 text-center sm:my-2'><NavLink to={"/myfavorite"}>Favorite Movie</NavLink></li>
        <li className='mx-1 text-center sm:my-2'><NavLink to={"/bestone"}>Best One</NavLink></li>
    </>
    return (
        <div>
            <div className="navbar bg-base-100 my-2">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content rounded-box z-[1] mt-3 w-52 p-2 shadow">
                            {
                                link
                            }
                        </ul>
                    </div>
                    <a className="btn btn-ghost text-xl">Movie Portal</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {
                            link
                        }
                    </ul>
                </div>
                <div className="navbar-end">
                    <p className="btn mx-2">
                        {
                            users && users?.email ? (<button onClick={logOut}>Log-Out</button>) : (<Link to="/login">LogIn</Link>)
                        }
                    </p>

                    <p className='btn'>
                        {
                            users && users.email ?
                                
                                <div className="tooltip" data-tip={users?.displayName}>
                                    <button className="btn"><img className="w-10 rounded-full" src={users.photoURL} alt="" /></button>
                                </div>

                                : <Link to="/register">Register</Link>
                        }

                    </p>
                </div>
            </div>
        </div>
    );
};

export default Navbar;