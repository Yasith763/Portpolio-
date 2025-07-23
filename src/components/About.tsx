import React from 'react'
import './About.css'

const About: React.FC = () => {
  const stats = [
    { number: '10+', label: 'Projects Completed' },
    { number: '3+', label: 'Years Experience' },
    { number: '20+', label: 'Happy Clients' },
    { number: '100%', label: 'Satisfaction Rate' }
  ]

  return (
    <section id="about" className="about">
      <div className="about__container">
        <div className="about__content">
          <div className="about__text">
            <h2 className="about__title">About Me</h2>
            <h3 className="about__subtitle">
              Passionate Developer Creating Digital Excellence
            </h3>
            <p className="about__description">
              I'm Yasith Imalka, a passionate full stack developer with expertise in creating 
              end-to-end web applications. I specialize in modern frontend technologies like React 
              and TypeScript, while also building robust backend systems with Node.js, Python, and 
              various databases. My goal is to bridge the gap between design and functionality.
            </p>
            <p className="about__description">
              When I'm not coding, you can find me exploring new technologies, contributing to 
              open-source projects, or sharing knowledge with the developer community. I believe 
              in writing clean, maintainable code and creating solutions that scale efficiently.
            </p>
            <div className="about__highlights">
              <div className="about__highlight">
                <h4>🎯 Specialization</h4>
                <p>Full Stack Development, Frontend Architecture, Backend APIs, Database Design</p>
              </div>
              <div className="about__highlight">
                <h4>🚀 Philosophy</h4>
                <p>User-first design, scalable architecture, performance optimization, continuous learning</p>
              </div>
            </div>
          </div>
          <div className="about__stats">
            {stats.map((stat, index) => (
              <div key={index} className="about__stat">
                <div className="about__stat-number">{stat.number}</div>
                <div className="about__stat-label">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
