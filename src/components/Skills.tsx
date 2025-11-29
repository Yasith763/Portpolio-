import React from 'react'
import './Skills.css'
import useScrollAnimation from '../hooks/useScrollAnimation'

const Skills: React.FC = () => {
  const headerAnimation = useScrollAnimation<HTMLDivElement>({ threshold: 0.2 })
  const skillsAnimation = useScrollAnimation<HTMLDivElement>({ threshold: 0.1 })

  const skillCategories = [
    {
      title: 'Frontend Development',
      skills: [
        { name: 'React' },
        { name: 'TypeScript' },
        { name: 'JavaScript' },
        { name: 'HTML/CSS' },
        { name: 'Next.js' },
        { name: 'Tailwind CSS' },
      ]
    },
    {
      title: 'Backend Development',
      skills: [
        { name: 'Node.js' },
        { name: 'Express.js' },
      ]
    },
    {
      title: 'Database & DevOps',
      skills: [
        { name: 'MongoDB' },
        { name: 'PostgreSQL' },
        { name: 'MySQL' },
        { name: 'Docker' },
      ]
    }
  ]

  return (
    <section id="skills" className="skills">
      <div className="skills__container">
        <div
          ref={headerAnimation.ref}
          className={`skills__header fade-in ${headerAnimation.isVisible ? 'visible' : ''}`}
        >
          <h2 className="skills__title">Skills</h2>
          <h3 className="skills__subtitle">Technologies I Work With</h3>
          <p className="skills__description">
            As a full stack developer, I work with a comprehensive set of technologies
            across the entire development stack. From crafting responsive user interfaces
            to building scalable backend services and managing databases, I bring complete
            solutions to life.
          </p>
        </div>

        <div
          ref={skillsAnimation.ref}
          className={`skills__grid stagger-children ${skillsAnimation.isVisible ? 'visible' : ''}`}
        >
          {skillCategories.map((category, categoryIndex) => (
            <div key={categoryIndex} className="skills__category stagger-item scale-in">
              <h4 className="skills__category-title">{category.title}</h4>
              <div className="skills__list">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="skills__item">
                    <div className="skills__item-header">
                      <span className="skills__item-name">{skill.name}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="skills__additional">
          <div className="skills__soft">
            <h4>Soft Skills</h4>
            <div className="skills__tags">
              <span className="skills__tag">Problem-solving</span>
              <span className="skills__tag">Teamwork & Collaboration</span>
              <span className="skills__tag">Project Management</span>
              <span className="skills__tag">Time Management</span>
            </div>
          </div>
          <div className="skills__languages">
            <h4>Languages</h4>
            <div className="skills__language-list">
              <div className="skills__language-item">
                <span className="skills__language-name">English</span>
                <span className="skills__language-level">Fluent</span>
              </div>
              <div className="skills__language-item">
                <span className="skills__language-name">Sinhala</span>
                <span className="skills__language-level">Native</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Skills
