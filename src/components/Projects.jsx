import React from 'react'

const Projects = () => {
    return (
        <section id="projects" className="projects">

            <h2>My Projects</h2>

            <div className="projects-list">

                <article className="project-card">

                    <h3>E-Commerce Store</h3>

                    <p>
                        A responsive e-commerce application built with
                        React. It includes product API integration,
                        search, cart management, quantity controls and
                        LocalStorage persistence.
                    </p>

                    <p>
                        <strong>Tech:</strong> HTML, CSS, JavaScript, React
                    </p>

                    <div className="project-links">

                        <a
                            href="https://ecommerce-store-kappa-taupe.vercel.app/"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Live Demo
                        </a>

                        <a
                            href="https://github.com/prakashsince2k/ecommerce-store"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            GitHub
                        </a>

                    </div>

                </article>


                <article className="project-card">

                    <h3>Expense Tracker</h3>

                    <p>
                        An expense management application built with
                        React. It supports adding, editing, deleting,
                        searching, filtering and LocalStorage persistence.
                    </p>

                    <p>
                        <strong>Tech:</strong> HTML, CSS, JavaScript, React
                    </p>

                    <div className="project-links">

                        <a
                            href="https://expense-tracker-eta-one-52.vercel.app/"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Live Demo
                        </a>


                        <a
                            href="https://github.com/prakashsince2k/expense-tracker"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            GitHub
                        </a>

                    </div>

                </article>


                <article className="project-card">

                    <h3>Job Finder</h3>

                    <p>
                        A job search application built with React.
                        It includes API integration, job details,
                        search, location and category filtering,
                        saved jobs and LocalStorage persistence.
                    </p>

                    <p>
                        <strong>Tech:</strong> HTML, CSS, JavaScript, React
                    </p>

                    <div className="project-links">

                        <a
                            href="https://job-finder-theta-topaz.vercel.app/"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Live Demo
                        </a>

                        <a
                            href="https://github.com/prakashsince2k/Job-Finder"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            GitHub
                        </a>


                    </div>

                </article>

            </div>

        </section>
    )
}

export default Projects