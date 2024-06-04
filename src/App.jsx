
import './App.css'
import CounterPage from './components/CounterPage'
import CTA from './components/CTA'
import Footer from './components/Footer'
import Hero from './components/Hero'
import KeyProbs from './components/KeyProbs'
import Navbar from './components/Navbar'
import ProblemExplainer from './components/ProblemExplainer'
import ScrollPage from './components/ScrollPage'
import Slider from './components/Slider'
import Testimonial from './components/Testimonial'

function App() {
  
  return (
    <>
      <Navbar/>
      <Hero/>
      <KeyProbs/>
      <CounterPage/>

      <Slider/>
      <Testimonial/>
      <ProblemExplainer/>
      <CTA/>
      <Footer/>
        
    </>
  )
}

export default App
