import React from 'react'

const Hero = () => {
    return (
        <section id="home" className="hero">

            <p>Hi, I'm</p>

            <h1>A. Jayaprakasam</h1>

            <h2>Frontend Developer</h2>

            <p>
                I'm a fresher passionate about building
                responsive and user-friendly web applications
                using HTML, CSS, JavaScript and React.
            </p>

            <div className="hero-actions">

                <a href="#projects">
                    View Projects
                </a>

                <a href="#contact">
                    Contact Me
                </a>

            </div>

        </section>
    )
}

export default Hero