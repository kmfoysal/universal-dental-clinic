import React from 'react';
import { NavLink } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import logo from '../../images/Tooth Whitening.png';

const Header = () => {
    const {user,logOut} = useAuth()

    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container lg:px-24">
                    <NavLink to='/'>
                    <a className="navbar-brand d-flex items-center text-primary font-semibold" href="#">
                    <img src={logo} alt="" width="30" height="24" class="d-inline-block align-text-top mr-2"/>
                        Universal Dental
                    </a>
                    </NavLink>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav items-center ms-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                    <NavLink className="nav-link active" aria-current="page" to="/home">Home</NavLink>
                    </li>
                    <li className="nav-item">
                    <NavLink className="nav-link" aria-current="page" to="/about">About</NavLink>
                    </li>
                    <li className="nav-item">
                    <NavLink className="nav-link mr-2" aria-current="page" to="/contact">Contact</NavLink>
                    </li>

                    {user.email ? 
                       <li className="d-flex items-center">
                           <img src={user.photoURL} alt="img"  className='w-10 h-10 rounded-full mr-2'/>
                       <p className=" mr-2 text-success font-semibold">{user.displayName}</p>
                       <button onClick={logOut} className='font-medium py-2 px-3 text-white rounded-full bg-gradient-to-r from-purple-500 to-indigo-500'>Logout</button>
                       </li>
                       :
                       <li className="nav-item">
                        <NavLink className="" to="/login"><button className='font-medium py-2 px-3 text-white rounded-full bg-gradient-to-r from-purple-500 to-indigo-500'>Login/Signup</button></NavLink>
                       </li>
                    }
                    
                    
                </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Header;