import React from 'react'

const Skills = () => {
    return (
        <section id="skills" className="skills">

            <h2>Skills</h2>

            <div className="skills-list">

                <div className="skill-card">
                    <h3>HTML</h3>
                    <p>Semantic and accessible page structure</p>
                </div>

                <div className="skill-card">
                    <h3>CSS</h3>
                    <p>Responsive layouts and modern styling</p>
                </div>

                <div className="skill-card">
                    <h3>JavaScript</h3>
                    <p>DOM, events, APIs, async JavaScript and ES6+</p>
                </div>

                <div className="skill-card">
                    <h3>React</h3>
                    <p>Components, hooks, routing, Context API and API integration</p>
                </div>

            </div>

        </section>
    )
}

export default Skills