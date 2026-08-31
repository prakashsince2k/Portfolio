import React from 'react'

const Resume = () => {
    return (
        <section id="resume" className="resume">

            <h2>Resume</h2>

            <p>
                I'm looking for an opportunity to start my career
                as a Frontend Developer and grow by working on
                real-world projects.
            </p>

            <a
                href="/resume.pdf"
                className="resume-btn"
                target="_blank"
                rel="noopener noreferrer"
            >
                Download Resume
            </a>

        </section>
    )
}

export default Resume