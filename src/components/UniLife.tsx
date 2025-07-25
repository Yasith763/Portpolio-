import React from 'react'
import './UniLife.css'
import useScrollAnimation from '../hooks/useScrollAnimation'
import robogames from '../assets/robogames.jpeg'
import sliot from '../assets/sliot.jpeg'
import moraspirit from '../assets/moraspirit.jpg'
import batchtrip from '../assets/batch trip.jpg'
import sakura from '../assets/sakura.jpg'
import careersday from '../assets/carees day.jpg'
import hittheground from '../assets/hit the ground.jpg'

const UniLife: React.FC = () => {
  const headerAnimation = useScrollAnimation<HTMLDivElement>({ threshold: 0.2 })
  const gridAnimation = useScrollAnimation<HTMLDivElement>({ threshold: 0.1 })

  const engagements = [
    {
      id: 1,
      title: 'IESL Robo Games 2025',
      subtitle: '🚀 IESL Robo Games 2025 | Battle Bot Competition 🤖',
      description: 'Proud to have been a part of the Organizing Committee for the highly anticipated IESL Robo Games 2025, successfully held at the University of Moratuwa. From fierce battle bot clashes to showcasing cutting-edge robotics innovations, the event brought together some of the brightest young minds in engineering and technology. It was truly inspiring to witness the passion, creativity, and teamwork on display. A big shoutout to all the participants, volunteers, and fellow organizers who made this event a massive success.💡🔥',
      image: robogames
    },
    {
      id: 2,
      title: 'SLIOT Challenge',
      subtitle: 'SLIOT School Category Workshop',
      description: 'Thrilled to be part of the organizing committee member for the SLIOT School Category Workshop organized by department of Computer Science and Engineering University of Moratuwa! 🚀 . It was an incredible experience bringing together young minds to explore the world of IoT and innovation. Excited for more opportunities to inspire and empower the next generation of tech enthusiasts! 🔥',
      image: sliot
    },
    {
      id: 3,
      title: 'Mora Spirit',
      subtitle: 'Photography Pillar Member',
      description: '📸 Grateful for an incredible year with MoraSpirit as part of the Photography Pillar! From capturing the energy of InterUni 2024 🏆 to working behind the scenes enhancing moments through editing ✨, every click told a story. A huge thank you to the amazing team and everyone who supported my journey 🙌 Excited for what\'s ahead! 🚀',
      image: moraspirit
    },
    {
      id: 4,
      title: 'Batch Trip',
      subtitle: '22 Batch Engineering Faculty Trip',
      description: 'As the 22 batch of the engineering faculty, University of Moratuwa, we were able to organize the long-awaited batch trip after 8 years of pause (2017.03.25 to 2025.01.25). This would not have been possible without the immense support of our batchmates and the unwavering dedication of our representatives. Months of planning and tireless efforts all came together to make this dream a reality. It was more than just a trip it was a celebration of unity and the enduring bond we hold as a batch. We believed in it, and together, we made it happen.❤️',
      image: batchtrip
    },
    {
      id: 5,
      title: 'Sakura 2025',
      subtitle: 'Moonlit Magic Night',
      description: '🌸 Sakura 2025 was a night to remember—moonlit magic, laughter, and unforgettable memories! ✨🎶 Swipe through the moments that made it truly special.',
      image: sakura
    },
    {
      id: 6,
      title: 'Careers Day 2025',
      subtitle: '🚀 CSE Careers Day 2025 : A Resounding Success! 🎉',
      description: 'The first day of CSE Careers Day 2025 was a remarkable success, bringing together 20+ industry giants to inspire and guide the next generation of tech pioneers. This event created an invaluable platform for students to take their first step towards shaping the future of the tech industry. A heartfelt thank you to all our esteemed participants and partners for your immense support in making this possible. Together, let\'s build the future of tech—one connection at a time. 💡✨',
      image: careersday
    },
    {
      id: 7,
      title: 'Hit the Grounds 2024',
      subtitle: 'Cricket Tournament & More',
      description: 'The wait is over - Hit The Grounds 2024 kicks off today with excitement in the air! 🏏 But that\'s not all — get ready for even more fun with 🎯 Dart challenge and 🗺️ AR Treasure Hunt. Come join the action, cheer for your teams, and make unforgettable memories!✨',
      image: hittheground
    }
  ]

  return (
    <section id="university-engagements" className="unilife">
      <div className="unilife__container">
        <div 
          ref={headerAnimation.ref}
          className={`unilife__header slide-up ${headerAnimation.isVisible ? 'visible' : ''}`}
        >
          <h2 className="unilife__title">University Engagements</h2>
          <h3 className="unilife__subtitle">Campus Life & Activities</h3>
          <p className="unilife__description">
            Beyond academics, I've been actively involved in various university events and activities, 
            contributing to the vibrant campus community and gaining valuable leadership experience.
          </p>
        </div>

        <div 
          ref={gridAnimation.ref}
          className={`unilife__grid stagger-children ${gridAnimation.isVisible ? 'visible' : ''}`}
        >
          {engagements.map((engagement, index) => (
            <div 
              key={engagement.id} 
              className={`unilife__card stagger-item scale-in`}
              style={{ transitionDelay: `${index * 0.1}s` }}
            >
              <div className="unilife__card-image">
                <img 
                  src={engagement.image} 
                  alt={engagement.title}
                  className="unilife__image"
                />
              </div>
              <div className="unilife__card-content">
                <h4 className="unilife__card-title">{engagement.title}</h4>
                <h5 className="unilife__card-subtitle">{engagement.subtitle}</h5>
                <p className="unilife__card-description">{engagement.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default UniLife