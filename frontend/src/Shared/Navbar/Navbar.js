import React, { useState } from 'react';
import './Navbar.css';
import headerLogo from '../../Images/Group 1329.png';
import { NavLink, useNavigate } from 'react-router-dom';
import useAuth from './../../Hooks/useAuth';

const Navbar = () => {
    const { firebase } = useAuth();
    const { user, logout } = firebase;

    const [toggleNav, setToggleNav] = useState(false);

    const handleOpenNavbar = () => {
        if (toggleNav) {
            setToggleNav(false);
        } else {
            setToggleNav(true)
        }
    };

    const navigate = useNavigate();
    const handleRegister = () => {
        navigate('/register');
    };

    let activeStyle = {
        color: "#198754"
    };
    return (
        // Navbar Section Start
        <section className='navbar_section'>
            {/* Navbar Section Full Wrap */}
            <div className="navbar_section_wrap">
                {/* Navbar Container */}
                <div className='navbar_container'>
                    {/* Navbar Logo Wrap */}
                    <div className="navbar_logo_wrap">
                        <img src={headerLogo} alt="" />
                    </div>
                    {/* Nav Items Wrap */}
                    <div className={`${toggleNav ? "navbar_items_wrap" : "navbar_items_wrap toggle"}`}>
                        <nav>
                            <ul>
                                <li><NavLink to="/" style={({ isActive }) => isActive ? activeStyle : undefined}>
                                    Home
                                </NavLink></li>
                                <li> <NavLink to="/donation" style={({ isActive }) => isActive ? activeStyle : undefined}>
                                    Donation
                                </NavLink></li>
                                <li><NavLink to="/myEvents" style={({ isActive }) => isActive ? activeStyle : undefined}>
                                    My-Events
                                </NavLink></li>

                                <li>
                                    <span>
                                        {user?.displayName}
                                    </span>
                                </li>
                            </ul>
                            <div className="navbar_login_register_btn_wrap">
                                {!user?.email ?
                                    <button onClick={handleRegister}>Register</button>
                                    :
                                    <button onClick={logout}>Log-Out</button>}
                                {user?.email && <button>Admin</button>}
                            </div>
                        </nav>
                    </div>
                    <span onClick={handleOpenNavbar}><i className="fas fa-bars"></i></span>
                </div>
            </div>
        </section>
    );
};

export default Navbar;