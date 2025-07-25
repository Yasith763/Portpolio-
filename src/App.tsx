import { useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import UniLife from './components/UniLife'
import Articles from './components/Articles'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Loading from './components/Loading'
import './App.css'

function App() {
  const [isLoading, setIsLoading] = useState(true)

  const handleLoadingComplete = () => {
    setIsLoading(false)
  }

  return (
    <>
      {isLoading && <Loading onLoadingComplete={handleLoadingComplete} />}
      <div className={`App ${isLoading ? 'app--hidden' : 'app--visible'}`}>
        <Navbar />
        <main>
          <Hero />
          <About />
          <Skills />
          <Projects />
          <UniLife />
          <Articles />
          <Contact />
        </main>
        <Footer />
      </div>
    </>
  )
}

export default App
