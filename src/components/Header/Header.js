import React from 'react';
import { NavLink } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

const Header = () => {
    const {user,logOut} = useAuth()

    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container lg:px-24">
                    <a className="navbar-brand" href="#">UNIVERSAL DENTAL</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                    <NavLink className="nav-link active" aria-current="page" to="/home">Home</NavLink>
                    </li>
                    <li className="nav-item">
                    <NavLink className="nav-link active" aria-current="page" to="/about">About</NavLink>
                    </li>
                    <li className="nav-item">
                    <NavLink className="nav-link active" aria-current="page" to="/contact">Contact</NavLink>
                    </li>
                    <li className="nav-item">
                    <NavLink className="nav-link" to="/login">Login</NavLink>
                    </li>
                    <li className="nav-item">{user.displayName}</li>
                    
                    {user?.email && <button onClick={logOut}>Log Out</button>}
                    
                    
                </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Header;