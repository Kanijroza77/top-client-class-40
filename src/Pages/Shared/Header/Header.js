import React from 'react';
import logo from '../../../images/logo.png'
import './Header.css'
const Header = () => {
    return (
        <div className='fixed-top bg-white'>
            <div className='container'>
                <nav class="navbar navbar-expand-lg bg-body-tertiary">
                    <div class="container-fluid">
                        <a class="navbar-brand" href="#">
                            <img className='logo-img' src={logo} alt="" />


                        </a>
                        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"></span>
                        </button>
                        <div class="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
                                <li class="nav-item">
                                    <a class="nav-link fw-bold text-black" aria-current="page" href=
                                        "/Home">Home</a>
                                </li>

                                <li class="nav-item ">
                                    <a class="nav-link fw-bold text-black" href="/about">About</a>
                                </li>

                                <li class="nav-item  Sign-in">
                                    <a class="nav-link fw-bold text-black" href="/sign in">Sign in</a>
                                </li>

                                <li class="nav-item Sign-up">
                                    <a class="nav-link fw-bold text-white" href="/sign up">Sign up</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>



            </div>


        </div>
    );
};

export default Header;