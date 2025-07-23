import React from 'react'
import './Skills.css'

const Skills: React.FC = () => {
  const skillCategories = [
    {
      title: 'Frontend Development',
      skills: [
        { name: 'React', level: 90 },
        { name: 'TypeScript', level: 85 },
        { name: 'JavaScript', level: 95 },
        { name: 'HTML/CSS', level: 95 },
        { name: 'Next.js', level: 85 },
        { name: 'Vue.js', level: 80 }
      ]
    },
    {
      title: 'Backend Development',
      skills: [
        { name: 'Node.js', level: 90 },
        { name: 'Python', level: 85 },
        { name: 'Express.js', level: 88 },
        { name: 'Django', level: 80 },
        { name: 'REST APIs', level: 92 },
        { name: 'GraphQL', level: 75 }
      ]
    },
    {
      title: 'Database & DevOps',
      skills: [
        { name: 'MongoDB', level: 85 },
        { name: 'PostgreSQL', level: 80 },
        { name: 'MySQL', level: 82 },
        { name: 'Redis', level: 75 },
        { name: 'Docker', level: 78 },
        { name: 'AWS', level: 70 }
      ]
    }
  ]

  return (
    <section id="skills" className="skills">
      <div className="skills__container">
        <div className="skills__header">
          <h2 className="skills__title">Skills</h2>
          <h3 className="skills__subtitle">Technologies I Work With</h3>
          <p className="skills__description">
            As a full stack developer, I work with a comprehensive set of technologies 
            across the entire development stack. From crafting responsive user interfaces 
            to building scalable backend services and managing databases, I bring complete 
            solutions to life.
          </p>
        </div>

        <div className="skills__grid">
          {skillCategories.map((category, categoryIndex) => (
            <div key={categoryIndex} className="skills__category">
              <h4 className="skills__category-title">{category.title}</h4>
              <div className="skills__list">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="skills__item">
                    <div className="skills__item-header">
                      <span className="skills__item-name">{skill.name}</span>
                      <span className="skills__item-level">{skill.level}%</span>
                    </div>
                    <div className="skills__progress">
                      <div 
                        className="skills__progress-bar"
                        style={{ '--width': `${skill.level}%` } as React.CSSProperties}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="skills__additional">
          <div className="skills__soft">
            <h4>Soft Skills & Approach</h4>
            <div className="skills__tags">
              <span className="skills__tag">Problem Solving</span>
              <span className="skills__tag">Team Collaboration</span>
              <span className="skills__tag">Communication</span>
              <span className="skills__tag">Continuous Learning</span>
              <span className="skills__tag">Attention to Detail</span>
              <span className="skills__tag">Time Management</span>
              <span className="skills__tag">Critical Thinking</span>
              <span className="skills__tag">Adaptability</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Skills
