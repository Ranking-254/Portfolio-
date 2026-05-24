import React from 'react'
import { Routes, Route } from 'react-router-dom' // <--- Removed BrowserRouter from here
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import About from './pages/About'
import Projects from './pages/Projects'
import Contact from './pages/Contact'
import Squares from './components/Squares' 
import { clarity } from 'react-microsoft-clarity';
import AllProjects from './pages/AllProjects'

// This grabs the ID you just added to Vercel
const clarityId = import.meta.env.VITE_CLARITY_ID;

if (clarityId) {
  clarity.init(clarityId);
}

export default function App() {
  return (
    <div className="relative min-h-screen w-full overflow-x-hidden text-white font-inter bg-black selection:bg-cyan-500 selection:text-black scroll-smooth">
      
      {/* --- BACKGROUND LAYER --- */}
      <div className="fixed inset-0 z-0 w-full h-full">
        <Squares 
          direction="diagonal"      
          speed={0.5}               
          squareSize={40}           
          borderColor="#333"        
          hoverFillColor="#222"     
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black pointer-events-none"></div>
      </div>

      {/* --- CONTENT LAYER --- */}
      <div className="relative z-10 flex flex-col min-h-screen">
        <Navbar />
        
        <main className="container mx-auto px-6 w-full max-w-[100vw] overflow-hidden flex-grow">
          <Routes> {/* <--- Keeps the routes, relying on the outer Router context */}
            
            {/* MAIN PORTFOLIO ROUTE (Single-Scroll Landing Page) */}
            <Route path="/" element={
              <>
                <section id="home" className="w-full min-h-screen flex flex-col justify-start md:justify-center pt-32 md:pt-20">
                  <Home />
                </section>

                <section id="about" className="min-h-screen flex items-center justify-center py-12 md:py-20">
                  <About />
                </section>

                <section id="projects" className="min-h-screen py-12 md:py-20">
                  <Projects />
                </section>

                <section id="contact" className="min-h-[80vh] flex items-center justify-center py-12 md:py-20">
                  <Contact />
                </section>
              </>
            } />

            {/* DEDICATED NEW PAGE ROUTE FOR ALL PROJECTS */}
            <Route path="/all-projects" element={
              <section id="all-projects" className="min-h-screen py-12 md:pt-32 md:pb-20">
                <AllProjects />
              </section>
            } />

          </Routes>
        </main>
        
        <Footer />
      </div>
      
    </div>
  )
}