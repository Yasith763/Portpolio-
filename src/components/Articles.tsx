import React from 'react'
import './Articles.css'
import OSI from '../assets/OSI.webp'
import Waterfall from '../assets/Waterfall.webp'
import AI from '../assets/AI.webp'
import SQL from '../assets/SQL.webp'

const Articles: React.FC = () => {
  const articles = [
    {
      id: 1,
      title: 'OSI Model',
      description: 'The OSI (Open Systems Interconnection) Model is a conceptual framework that standardizes the functions of a telecommunication or computing system into seven distinct layers. Each layer serves a specific purpose and communicates with the layers directly above and below it. 🧠💻\n\n🔍 Whether you\'re debugging a connection issue or designing scalable systems, knowing the OSI model helps you pinpoint where things go right—or wrong.',
      image: OSI,
      link: 'https://medium.com/@tgyasithimalka/the-osi-model-in-networking-23e3925905c6'
    },
    {
      id: 2,
      title: 'The Waterfall Model',
      description: '🌊The Waterfall Model is a traditional approach to software development where each phase flows in a linear sequence. From gathering requirements 📋 to deployment 🚀 and maintenance 🔄, each step is completed before moving on to the next. It\'s an easy-to-follow, structured process, best suited for simple projects with well-defined requirements.',
      image: Waterfall,
      link: 'https://medium.com/@tgyasithimalka/the-waterfall-model-dc792dbc44aa'
    },
    {
      id: 3,
      title: 'AI in Games',
      description: '🚀 AI in Games: How It\'s Changing the Way We Play 🎮\nAI is transforming video games, making them smarter, more immersive, and more exciting than ever before! From intelligent NPCs that react to your moves to AI-generated game worlds that feel endless, the gaming industry is evolving fast.\nIn my latest article, I explore how AI is used in games to create realistic characters, adaptive difficulty, better graphics, and even automated game testing. Plus, I take a look at what the future holds—could AI one day create entire games on its own?\nCheck out the full article and let me know: Is AI making games better, or do you think it\'s taking away the challenge?',
      image: AI,
      link: 'https://medium.com/@tgyasithimalka/ai-in-games-how-it-makes-games-better-834f2217b886'
    },
    {
      id: 4,
      title: 'SQL vs NoSQL',
      description: 'When building apps, choosing the right database is crucial. SQL (Relational) databases store structured data in tables, ensuring accuracy and relationships, making them ideal for banking, e-commerce, and financial applications. NoSQL (Non-Relational) databases, like MongoDB or Redis, offer flexibility, speed, and scalability—perfect for social media, real-time analytics, and big data.\n\nWhich one is right for you? 🤔 If your data has a fixed structure, go with SQL. If you need speed and flexibility, NoSQL is the way to go!\n\nRead more in my latest article and share your thoughts!',
      image: SQL,
      link: 'https://medium.com/@tgyasithimalka/ai-in-games-how-it-makes-games-better-834f2217b886'
    }
  ]

  return (
    <section id="articles" className="articles">
      <div className="articles__container">
        <div className="articles__header">
          <h2 className="articles__title">My Articles</h2>
          <h3 className="articles__subtitle">Technical Insights & Knowledge Sharing</h3>
          <p className="articles__description">
            Explore my technical articles where I share insights on software development, 
            networking, AI, and database technologies. Each article breaks down complex 
            concepts into digestible content.
          </p>
        </div>

        <div className="articles__grid">
          {articles.map((article) => (
            <div key={article.id} className="articles__card">
              <div className="articles__card-image">
                <img 
                  src={article.image} 
                  alt={article.title}
                  className="articles__image"
                />
              </div>
              <div className="articles__card-content">
                <h4 className="articles__card-title">{article.title}</h4>
                <p className="articles__card-description">
                  {article.description.split('\n').map((line, index) => (
                    <React.Fragment key={index}>
                      {line}
                      {index < article.description.split('\n').length - 1 && <br />}
                    </React.Fragment>
                  ))}
                </p>
                <a 
                  href={article.link} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="articles__card-link"
                >
                  Read Full Article →
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Articles