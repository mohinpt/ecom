
import './App.css'
import { BottomNavbar } from './components/BottomNavbar'
import { Category } from './components/Category'
import { Features } from './components/Features'
import { Hero } from './components/Hero'
import { Navbar } from './components/Navbar'

function App() {

  return (
    <>
      <Navbar />
      <div className="px-20">
        <BottomNavbar />
        <Hero />
        <Features />
        <Category />
      </div>

    </>
  )
}

export default App
