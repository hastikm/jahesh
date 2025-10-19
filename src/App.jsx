import './App.css'
import Navbar from './section/Navbar' 
import UnderNav from './section/UnderNav'
import Hero from './section/Hero'
import Competitions from './section/Competitions'
import EventSteps from './section/EventSteps'
import Benefits from './section/Benefits'
import Brands from './section/Brands'
import Footer from './section/Footer'
function App() {


  return (
    <>

    <Navbar />
    <UnderNav />
    <div className='container mx-auto'>
  
    <Hero />
    <Competitions />
    <EventSteps />
    <Benefits />
    <Brands />
   </div>
   <Footer />
    </>
  )
}

export default App
