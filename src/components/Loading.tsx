import React, { useState, useEffect } from 'react'
import './Loading.css'

interface LoadingProps {
  onLoadingComplete?: () => void
}

const Loading: React.FC<LoadingProps> = ({ onLoadingComplete }) => {
  const [isVisible, setIsVisible] = useState(true)
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    // Simulate loading progress
    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval)
          // Start fade out after progress completes
          setTimeout(() => {
            setIsVisible(false)
            onLoadingComplete?.()
          }, 500)
          return 100
        }
        return prev + Math.random() * 10 + 2
      })
    }, 150)

    return () => clearInterval(interval)
  }, [onLoadingComplete])

  if (!isVisible) return null

  return (
    <div className={`loading ${progress >= 100 ? 'loading--fadeOut' : ''}`}>
      <div className="loading__container">
        <div className="loading__logo">
          <div className="loading__logo-letter">Y</div>
          <div className="loading__logo-ring"></div>
          <div className="loading__logo-dots">
            <div className="loading__dot loading__dot--1"></div>
            <div className="loading__dot loading__dot--2"></div>
            <div className="loading__dot loading__dot--3"></div>
          </div>
        </div>
        <div className="loading__text">
          <span className="loading__name">Yasith Imalka</span>
          <span className="loading__subtitle">Loading Portfolio...</span>
        </div>
        <div className="loading__progress">
          <div 
            className="loading__progress-bar"
            style={{ width: `${progress}%` }}
          ></div>
        </div>
        <div className="loading__percentage">
          {Math.round(progress)}%
        </div>
      </div>
      <div className="loading__particles">
        {Array.from({ length: 20 }).map((_, index) => (
          <div 
            key={index} 
            className="loading__particle"
            style={{
              '--delay': `${index * 0.1}s`,
              '--x': `${Math.random() * 100}%`,
              '--y': `${Math.random() * 100}%`
            } as React.CSSProperties}
          ></div>
        ))}
      </div>
    </div>
  )
}

export default Loading
