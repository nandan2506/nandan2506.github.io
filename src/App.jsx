
import './App.css'
import About from './components/About'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Home from './components/Home'
import NavBar from './components/NavBar'
import Projects from './components/Projects'

function App() {

  return (
    <div className='bg-[#0f152f] '>
      <NavBar/>
      <Home/>
      <About/>
      <Projects/>
      <Contact/>
      <Footer/>
    </div>
  )
}

export default App
