
import './App.css'
import { BottomNavbar } from './components/BottomNavbar'
import { Services } from './components/Services'
import { Hero } from './components/Hero'
import { Navbar } from './components/Navbar'
import { ProductShowcase } from './components/ProductShowcase'
import { Footer } from './components/Footer'

function App() {

  return (
    <>
      <Navbar />
      <div className="px-2 md:px-10 lg:px-20">
        <BottomNavbar />
        <Hero />
        <Services />
        <ProductShowcase />
      </div>
      <Footer />

    </>
  )
}

export default App
