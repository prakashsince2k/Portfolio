import React from 'react'

const Contact = () => {
    return (
        <section id="contact" className="contact">

            <h2>Contact Me</h2>

            <p>
                I'm currently looking for an opportunity to start
                my career as a Frontend Developer.
            </p>

            <div className="contact-links">

                <a href="mailto:prakashsince2k@gmail.com">
                    Email Me
                </a>

                <a
                    href="https://github.com/prakashsince2k"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    GitHub
                </a>

                <a
                    href="https://www.linkedin.com/in/a-jayaprakasam-1a1205310"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    LinkedIn
                </a>

            </div>

        </section>
    )
}

export default Contact