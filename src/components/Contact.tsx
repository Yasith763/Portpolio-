import React, { useState } from 'react'
import './Contact.css'

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission here
    console.log('Form submitted:', formData)
    // Reset form
    setFormData({ name: '', email: '', subject: '', message: '' })
    alert('Thank you for your message! I\'ll get back to you soon.')
  }

  const contactMethods = [
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor" className="contact__method-icon">
          <path d="M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.273H1.636A1.636 1.636 0 0 1 0 19.366V5.457c0-.904.732-1.636 1.636-1.636h.751L12 10.38l9.613-6.559h.751c.904 0 1.636.732 1.636 1.636z"/>
        </svg>
      ),
      title: 'Email',
      value: 'tgyasithimalka@gmail.com',
      link: 'mailto:tgyasithimalka@gmail.com'
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor" className="contact__method-icon">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
        </svg>
      ),
      title: 'LinkedIn',
      value: 'Yasith Imalka',
      link: 'https://www.linkedin.com/in/yasith-imalka-31b6a32a1'
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor" className="contact__method-icon">
          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
        </svg>
      ),
      title: 'GitHub',
      value: 'Yasith763',
      link: 'https://github.com/Yasith763'
    }
  ]

  return (
    <section id="contact" className="contact">
      <div className="contact__container">
        <div className="contact__header">
          <h2 className="contact__title">Contact</h2>
          <h3 className="contact__subtitle">Let's Work Together</h3>
          <p className="contact__description">
            I'm always interested in new opportunities and exciting projects. 
            Whether you have a question, want to discuss a project, or just want to say hello, 
            I'd love to hear from you!
          </p>
        </div>

        <div className="contact__content">
          <div className="contact__info">
            <div className="contact__methods">
              {contactMethods.map((method, index) => (
                <a
                  key={index}
                  href={method.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact__method"
                >
                  <div className="contact__method-icon-wrapper">
                    {method.icon}
                  </div>
                  <div className="contact__method-details">
                    <h4 className="contact__method-title">{method.title}</h4>
                    <p className="contact__method-value">{method.value}</p>
                  </div>
                </a>
              ))}
            </div>

            <div className="contact__availability">
              <h4>Availability</h4>
              <p>
                I'm currently <span className="contact__status contact__status--available">available</span> for freelance work and full-time opportunities.
              </p>
              <p>
                Response time: Usually within 24 hours
              </p>
            </div>
          </div>

          <form className="contact__form" onSubmit={handleSubmit}>
            <div className="contact__form-group">
              <label htmlFor="name" className="contact__label">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="contact__input"
                required
              />
            </div>

            <div className="contact__form-group">
              <label htmlFor="email" className="contact__label">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="contact__input"
                required
              />
            </div>

            <div className="contact__form-group">
              <label htmlFor="subject" className="contact__label">Subject</label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                className="contact__input"
                required
              />
            </div>

            <div className="contact__form-group">
              <label htmlFor="message" className="contact__label">Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                className="contact__textarea"
                rows={6}
                required
              ></textarea>
            </div>

            <button type="submit" className="contact__submit">
              <svg viewBox="0 0 24 24" fill="currentColor" className="contact__submit-icon">
                <path d="M24 0l-6 22-8.129-7.239 7.802-8.234-10.458 7.227-7.215-1.754 24-12zm-15 16.668v7.332l3.258-4.431-3.258-2.901z"/>
              </svg>
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}

export default Contact
