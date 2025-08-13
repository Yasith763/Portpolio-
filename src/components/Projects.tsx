import React from 'react'
import './Projects.css'
import fastx from '../assets/fastx.jpeg'
import moraclick from '../assets/moraclick.jpeg'
import zia from '../assets/zia.png'
import { useScrollAnimation } from '../hooks/useScrollAnimation'

const Projects: React.FC = () => {
  const header = useScrollAnimation<HTMLDivElement>()
  const featuredSection = useScrollAnimation<HTMLDivElement>()
  const otherSection = useScrollAnimation<HTMLDivElement>()
  const projects = [
    {
      id: 0,
      title: 'Zia – Online Service Marketplace',
      description: 'Developed a SaaS-based web platform connecting customers in Sri Lanka with local service providers for categories such as tutoring, household repairs, and design. Implemented geo-location search, secure payment integration, real-time messaging, reviews & ratings, and an admin dashboard for system oversight. Focused on usability, scalability, and security, enabling role-based access control and mobile responsiveness.',
  image: zia,
      technologies: ['React.js', 'Node.js (Express)', 'PostgreSQL', 'Google Maps API', 'AWS', 'PayHere/Stripe', 'WebSocket (Socket.IO)'],
      liveUrl: '',
      githubUrl: 'https://github.com/CS3203-Project',
      featured: true,
      duration: 'July 2025 – Present'
    },
    {
      id: 1,
      title: 'MoraClick',
      description: 'A web app built to improve the canteen experience at University of Moratuwa. Students can log in, explore food items, rate food and review canteens, get real-time notifications. Canteen staff can manage their menu easily.',
      image: moraclick,
      technologies: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'Firebase', 'Cloudinary'],
      liveUrl: 'https://mora-click-xpzw.onrender.com/',
      githubUrl: 'https://lnkd.in/guEHh8YT',
      featured: true,
      duration: 'Dec 2024 - Mar 2025'
    },
    {
      id: 2,
      title: 'FastX - Logistics Management System',
      description: 'A modern logistics management system designed to streamline operations. Features role-based access, smart logistics using trucks and trains, workforce efficiency management, order tracking, and comprehensive reporting.',
      image: fastx,
      technologies: ['React.js', 'Node.js', 'MySQL', 'Tailwind CSS', 'Express.js'],
      liveUrl: 'https://fastx2.netlify.app',
      githubUrl: 'https://github.com/ashiduDissanayake/FastX-2.0.git',
      featured: true,
      duration: 'Database Systems Project'
    },
    {
      id: 3,
      title: 'Nano Processor Design',
      description: 'A 4-bit nano processor capable of executing essential arithmetic and control instructions. Features arithmetic unit with 2\'s complement, 3-bit program counter, multiplexers, and comprehensive instruction set.',
      image: '/api/placeholder/400/250',
      technologies: ['VHDL', 'BASYS 3 FPGA', 'Xilinx'],
      liveUrl: '#',
      githubUrl: 'https://github.com/Yasith763/Nano-Processor.git',
      featured: false,
      duration: 'Jan 2024 - May 2024'
    },
    {
      id: 4,
      title: 'Yasix Gym',
      description: 'A modern, responsive gym website built using React.js. Features interactive header, feature highlights, special offers, about section, and contact form.',
      image: '/api/placeholder/400/250',
      technologies: ['React.js', 'CSS', 'HTML'],
      liveUrl: 'https://yasixgym.netlify.app',
      githubUrl: 'https://github.com/Yasith763/Gym-site-using-react',
      featured: false,
      duration: 'Jan 2024 - Mar 2024'
    },
    {
      id: 5,
      title: 'Yasix Real Estate',
      description: 'A responsive real estate web application built with React.js. Includes home, about us, services, residencies, and contact us sections with modern UI design.',
      image: '/api/placeholder/400/250',
      technologies: ['React.js', 'CSS', 'HTML'],
      liveUrl: 'https://yasix-real-state.netlify.app',
      githubUrl: 'https://github.com/Yasith763/Real-State-WebSite-Using-React',
      featured: false,
      duration: 'Mar 2024 - May 2024'
    }
  ]

  const featuredProjects = projects.filter(project => project.featured)
  const otherProjects = projects.filter(project => !project.featured)

  return (
    <section id="projects" className="projects">
      <div className="projects__container">
        <div ref={header.ref} className={`projects__header ${header.isVisible ? 'fade-in-up' : ''}`}>
          <h2 className="projects__title">Projects</h2>
          <h3 className="projects__subtitle">Things I've Built</h3>
          <p className="projects__description">
            Here are some of the projects I've worked on. Each project showcases 
            different skills and technologies, from frontend interfaces to full-stack applications.
          </p>
        </div>

        <div ref={featuredSection.ref} className={`projects__featured ${featuredSection.isVisible ? 'fade-in-up' : ''}`}>
          <h4 className="projects__section-title">Featured Projects</h4>
          <div className="projects__featured-grid">
            {featuredProjects.map((project, index) => (
              <div key={project.id} className={`projects__card projects__card--featured ${featuredSection.isVisible ? 'fade-in-up' : ''}`} style={{ animationDelay: featuredSection.isVisible ? `${index * 0.2}s` : '0s' }}>
                <div className="projects__card-image">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="projects__image"
                  />
                </div>
                <div className="projects__card-content">
                  <h5 className="projects__card-title">{project.title}</h5>
                  <p className="projects__card-description">{project.description}</p>
                  <div className="projects__card-technologies">
                    {project.technologies.map((tech, index) => (
                      <span key={index} className="projects__tech-tag">{tech}</span>
                    ))}
                  </div>
                  <div className="projects__card-links">
                    <a href={project.liveUrl} className="projects__link projects__link--primary">
                      <svg viewBox="0 0 24 24" fill="currentColor" className="projects__link-icon">
                        <path d="M14 3v2h3.59l-9.83 9.83 1.41 1.41L19 6.41V10h2V3h-7z"/>
                        <path d="M19 19H5V5h7V3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2v-7h-2v7z"/>
                      </svg>
                      Live Demo
                    </a>
                    <a href={project.githubUrl} className="projects__link projects__link--secondary">
                      <svg viewBox="0 0 24 24" fill="currentColor" className="projects__link-icon">
                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                      </svg>
                      GitHub
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div ref={otherSection.ref} className={`projects__other ${otherSection.isVisible ? 'fade-in-up' : ''}`}>
          <h4 className="projects__section-title">Other Notable Projects</h4>
          <div className="projects__grid">
            {otherProjects.map((project, index) => (
              <div key={project.id} className={`projects__card ${otherSection.isVisible ? 'fade-in-up' : ''}`} style={{ animationDelay: otherSection.isVisible ? `${index * 0.1}s` : '0s' }}>
                <div className="projects__card-header">
                  <h5 className="projects__card-title">{project.title}</h5>
                  <div className="projects__card-links">
                    <a href={project.liveUrl} className="projects__icon-link">
                      <svg viewBox="0 0 24 24" fill="currentColor" className="projects__link-icon">
                        <path d="M14 3v2h3.59l-9.83 9.83 1.41 1.41L19 6.41V10h2V3h-7z"/>
                        <path d="M19 19H5V5h7V3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2v-7h-2v7z"/>
                      </svg>
                    </a>
                    <a href={project.githubUrl} className="projects__icon-link">
                      <svg viewBox="0 0 24 24" fill="currentColor" className="projects__link-icon">
                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                      </svg>
                    </a>
                  </div>
                </div>
                <p className="projects__card-description">{project.description}</p>
                <div className="projects__card-technologies">
                  {project.technologies.map((tech, index) => (
                    <span key={index} className="projects__tech-tag">{tech}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Projects
