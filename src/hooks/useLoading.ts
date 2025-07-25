import { useState, useEffect } from 'react'

interface UseLoadingOptions {
  minLoadingTime?: number
  maxLoadingTime?: number
}

export const useLoading = (options: UseLoadingOptions = {}) => {
  const [isLoading, setIsLoading] = useState(true)
  const [progress, setProgress] = useState(0)
  
  const { minLoadingTime = 2000, maxLoadingTime = 4000 } = options

  useEffect(() => {
    // Simulate loading progress
    const progressInterval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(progressInterval)
          return 100
        }
        // Gradually increase progress with some randomness
        return prev + Math.random() * 15 + 5
      })
    }, 200)

    // Ensure minimum loading time
    const minTimer = setTimeout(() => {
      if (progress >= 100) {
        setIsLoading(false)
      }
    }, minLoadingTime)

    // Maximum loading time fallback
    const maxTimer = setTimeout(() => {
      setIsLoading(false)
    }, maxLoadingTime)

    // Check if all resources are loaded
    const handleLoad = () => {
      if (document.readyState === 'complete' && progress >= 100) {
        setTimeout(() => setIsLoading(false), 500)
      }
    }

    if (document.readyState === 'complete') {
      handleLoad()
    } else {
      window.addEventListener('load', handleLoad)
    }

    return () => {
      clearInterval(progressInterval)
      clearTimeout(minTimer)
      clearTimeout(maxTimer)
      window.removeEventListener('load', handleLoad)
    }
  }, [progress, minLoadingTime, maxLoadingTime])

  return { isLoading, progress }
}

export default useLoading
