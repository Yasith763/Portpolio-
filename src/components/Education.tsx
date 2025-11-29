import React from 'react'
import './Education.css'
import useScrollAnimation from '../hooks/useScrollAnimation'

const Education: React.FC = () => {
    const headerAnimation = useScrollAnimation<HTMLDivElement>({ threshold: 0.2 })
    const timelineAnimation = useScrollAnimation<HTMLDivElement>({ threshold: 0.1 })

    const educationData = [
        {
            institution: 'University of Moratuwa - Faculty of Engineering',
            degree: 'Bachelor of Science Honors in Computer Science and Engineering',
            location: 'Katubedda, Moratuwa, Sri Lanka',
            period: '2023 March - Present',
            current: true,
            type: 'university'
        },
        {
            institution: 'Rahula College',
            degree: 'GCE A/L 2021 (First Attempt) - Physical Science',
            location: 'Matara, Sri Lanka',
            period: '2019 - 2022',
            current: false,
            type: 'school'
        },
        {
            institution: "St. Thomas Boys' College",
            degree: 'GCE O/L',
            location: 'Matara, Sri Lanka',
            period: '2012 - 2018',
            current: false,
            type: 'school'
        }
    ]

    return (
        <section id="education" className="education">
            <div className="education__container">
                <div
                    ref={headerAnimation.ref}
                    className={`education__header fade-in ${headerAnimation.isVisible ? 'visible' : ''}`}
                >
                    <h2 className="education__title">Education</h2>
                    <h3 className="education__subtitle">
                        Academic Journey & Qualifications
                    </h3>
                </div>
                <div
                    ref={timelineAnimation.ref}
                    className={`education__timeline stagger-children ${timelineAnimation.isVisible ? 'visible' : ''}`}
                >
                    {educationData.map((edu, index) => (
                        <div key={index} className={`education__item stagger-item ${edu.current ? 'education__item--current' : ''}`}>
                            <div className="education__item-marker">
                                <div className="education__item-icon">
                                    {edu.type === 'university' ? '🎓' : '📚'}
                                </div>
                            </div>
                            <div className="education__item-content">
                                <div className="education__item-header">
                                    <div>
                                        <h4 className="education__institution">{edu.institution}</h4>
                                        <h5 className="education__degree">{edu.degree}</h5>
                                    </div>
                                    <div className="education__period">
                                        {edu.current && <span className="education__badge">Current</span>}
                                        <span className="education__period-text">{edu.period}</span>
                                    </div>
                                </div>
                                <div className="education__location">
                                    📍 {edu.location}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Education
