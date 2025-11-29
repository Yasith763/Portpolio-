import React from 'react'
import './Experience.css'
import useScrollAnimation from '../hooks/useScrollAnimation'

const Experience: React.FC = () => {
    const headerAnimation = useScrollAnimation<HTMLDivElement>({ threshold: 0.2 })
    const timelineAnimation = useScrollAnimation<HTMLDivElement>({ threshold: 0.1 })

    const experiences = [
        {
            company: 'KAST',
            position: 'Software Engineering Intern',
            period: 'Present',
            description: 'Spend, send, and save stablecoins around the world.',
            highlights: [
                '📲 Global money accounts',
                '💳 Cards accepted at 150M+ merchants and ATMs',
                '🌎 Available in 160+ countries'
            ],
            current: true
        }
    ]

    return (
        <section id="experience" className="experience">
            <div className="experience__container">
                <div
                    ref={headerAnimation.ref}
                    className={`experience__header fade-in ${headerAnimation.isVisible ? 'visible' : ''}`}
                >
                    <h2 className="experience__title">Experience</h2>
                    <h3 className="experience__subtitle">
                        Professional Journey & Growth
                    </h3>
                </div>
                <div
                    ref={timelineAnimation.ref}
                    className={`experience__timeline stagger-children ${timelineAnimation.isVisible ? 'visible' : ''}`}
                >
                    {experiences.map((exp, index) => (
                        <div key={index} className={`experience__item stagger-item ${exp.current ? 'experience__item--current' : ''}`}>
                            <div className="experience__item-marker">
                                {exp.current && <div className="experience__item-pulse"></div>}
                            </div>
                            <div className="experience__item-content">
                                <div className="experience__item-header">
                                    <div>
                                        <h4 className="experience__company">{exp.company}</h4>
                                        <h5 className="experience__position">{exp.position}</h5>
                                    </div>
                                    <div className="experience__period">
                                        {exp.current && <span className="experience__badge">Current</span>}
                                        <span className="experience__period-text">{exp.period}</span>
                                    </div>
                                </div>
                                <p className="experience__description">{exp.description}</p>
                                <div className="experience__highlights">
                                    {exp.highlights.map((highlight, idx) => (
                                        <div key={idx} className="experience__highlight">
                                            {highlight}
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Experience
