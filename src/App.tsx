import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import UniLife from './components/UniLife'
import Articles from './components/Articles'
import Contact from './components/Contact'
import Footer from './components/Footer'
import './App.css'

function App() {
  return (
    <div className="App">
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
  )
}

export default App
