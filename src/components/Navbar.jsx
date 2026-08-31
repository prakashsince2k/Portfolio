import React from 'react'

const Navbar = () => {
    return (
        <nav className="navbar">

            <div className="navbar-container">

                <h1 className="logo">
                    A. Jayaprakasam
                </h1>

                <div className="nav-links">

                    <a href="#about">About</a>
                    <a href="#skills">Skills</a>
                    <a href="#projects">Projects</a>
                    <a href="#resume">Resume</a>
                    <a href="#contact">Contact</a>

                </div>

            </div>

        </nav>
    )
}

export default Navbar