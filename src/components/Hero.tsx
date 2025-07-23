import React from 'react'
import yasixPhoto from '../assets/yasix.jpg'
import cv from "../assets/Yasith Imalka's CV.pdf"
import './Hero.css'

const Hero: React.FC = () => {
  return (
    <section id="home" className="hero">
      <div className="hero__container">
        <div className="hero__content">
          <div className="hero__text">
            <h1 className="hero__title">
              Hi, I'm <span className="hero__name">Yasith Imalka</span>
            </h1>
            <h2 className="hero__subtitle">
              Full Stack Developer
            </h2>
            <p className="hero__description">
              I create end-to-end web applications with modern technologies, from frontend interfaces 
              to robust backend systems. Passionate about clean code, scalable architecture, and delivering 
              exceptional user experiences.
            </p>
            <div className="hero__buttons">
              <a 
                href="#projects" 
                className="hero__btn hero__btn--primary"
                onClick={(e) => {
                  e.preventDefault()
                  document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' })
                }}
              >
                View My Work
              </a>
              <a 
                href="#contact" 
                className="hero__btn hero__btn--secondary"
                onClick={(e) => {
                  e.preventDefault()
                  document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })
                }}
              >
                Get In Touch
              </a>
              <a 
                href={cv}
                download="Yasith_Imalka_CV.pdf"
                className="hero__btn hero__btn--outline"
              >
                <svg viewBox="0 0 24 24" fill="currentColor" className="hero__btn-icon">
                  <path d="M14,2H6A2,2 0 0,0 4,4V20A2,2 0 0,0 6,22H18A2,2 0 0,0 20,20V8L14,2M18,20H6V4H13V9H18V20Z" />
                </svg>
                Download CV
              </a>
            </div>
          </div>
          <div className="hero__visual">
            <div className="hero__avatar">
              <img 
                src={yasixPhoto} 
                alt="Yasith Imalka - Full Stack Developer"
                className="hero__avatar-image"
                onError={(e) => {
                  // Fallback to SVG placeholder if photo doesn't load
                  const target = e.target as HTMLImageElement;
                  target.src = '/yasith-photo.svg';
                  target.onerror = null; // Prevent infinite loop
                }}
              />
            </div>
            <div className="hero__decorations">
              <div className="hero__decoration hero__decoration--1"></div>
              <div className="hero__decoration hero__decoration--2"></div>
              <div className="hero__decoration hero__decoration--3"></div>
            </div>
          </div>
        </div>
        <div className="hero__scroll">
          <div className="hero__scroll-indicator">
            <span>Scroll Down</span>
            <div className="hero__scroll-arrow">
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 16l-6-6h12z"/>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
