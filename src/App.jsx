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
    <div className="relative min-h-screen text-white font-inter bg-black selection:bg-cyan-500 selection:text-black">
      
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
        
        <main className="flex-1 container mx-auto px-6 py-10">
          <section id="home" className="min-h-[calc(100vh-80px)] flex items-center justify-center">
            <Home />
          </section>
          <section id="about" className="min-h-[calc(100vh-80px)] flex items-center justify-center">
            <About />
          </section>
          <section id="projects" className="min-h-[calc(100vh-80px)] flex items-center justify-center">
            <Projects />
          </section>
          <section id="contact" className="min-h-[calc(100vh-80px)] flex items-center justify-center">
            <Contact />
          </section>
        </main>
        
        <Footer />
      </div>
      
    </div>
  )
}