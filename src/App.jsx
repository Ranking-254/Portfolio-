import React from 'react'
//import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import About from './pages/About'
import Projects from './pages/Projects'
import Contact from './pages/Contact'
import Squares from './components/Squares' // <--- Import it

export default function App() {
  return (
    <div className="relative min-h-screen w-full overflow-x-hidden text-white font-inter bg-black selection:bg-cyan-500 selection:text-black scroll-smooth">
      
      {/* --- BACKGROUND LAYER --- */}
      <div className="fixed inset-0 z-0 w-full h-full">
        <Squares 
          direction="diagonal"      // Options: 'right', 'left', 'up', 'down', 'diagonal'
          speed={0.5}               // Smooth, slow movement
          squareSize={40}           // Size of the grid
          borderColor="#333"        // Subtle dark grey borders
          hoverFillColor="#222"     // Slightly lighter grey on hover
        />
        {/* Optional: A dark gradient overlay to make text easier to read */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black pointer-events-none"></div>
      </div>

      {/* --- CONTENT LAYER --- */}
      {/* We use relative and z-10 to make sure this sits ON TOP of the background */}
      <div className="relative z-10 flex flex-col min-h-screen">
        <Navbar />
        
        <main className="container mx-auto px-6 w-full max-w-[100vw] overflow-hidden">
          <section id="home" className="w-full min-h-screen flex flex-col justify-start md:justify-center pt-32 md:pt-20">
  <Home />
</section>

<section id="about" className="min-h-screen flex items-center justify-center py-12 md:py-20">
  <About />
</section>

{/* Projects usually needs MORE height than screen, so just min-h-screen is safer */}
<section id="projects" className="min-h-screen py-12 md:py-20">
  <Projects />
</section>

<section id="contact" className="min-h-[80vh] flex items-center justify-center py-12 md:py-20">
  <Contact />
</section>
        </main>
        
        <Footer />
      </div>
      
    </div>
  )
}