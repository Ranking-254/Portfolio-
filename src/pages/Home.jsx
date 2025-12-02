import React from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import RotatingText from '../components/RotatingText'
import LogoWall from '../components/LogoLoop' // Note: This might be named LogoLoop inside, but the file import is fine.

// Define your logos
const logoData = [
  { imgUrl: 'https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg', altText: "React" },
  { imgUrl: 'https://upload.wikimedia.org/wikipedia/commons/d/d9/Node.js_logo.svg', altText: "Node.js" },
  { imgUrl: 'https://www.vectorlogo.zone/logos/mongodb/mongodb-icon.svg', altText: "MongoDB" },
  { imgUrl: 'https://upload.wikimedia.org/wikipedia/commons/6/64/Expressjs.png', altText: "Express" },
  { imgUrl: 'https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg', altText: "Tailwind" },
  { imgUrl: 'https://www.vectorlogo.zone/logos/git-scm/git-scm-icon.svg', altText: "Git" },
]

export default function Home() {
  return (
    <section className="max-w-4xl mx-auto pb-20">
      <motion.div 
        initial={{ opacity: 0, y: 10 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-4xl md:text-6xl font-bold">Pattin Mugambi</h1>

        <div className="mt-3 flex flex-wrap items-center gap-2 text-xl md:text-2xl font-semibold text-gray-200">
          <span>Expert in</span>
          <RotatingText
            texts={['React', 'Node.js', 'MongoDB', 'MERN Stack']}
            mainClassName="px-2 sm:px-2 md:px-3 bg-cyan-300 text-black overflow-hidden py-0.5 sm:py-1 md:py-2 justify-center rounded-lg"
            staggerFrom={"last"}
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            exit={{ y: "-120%" }}
            staggerDuration={0.025}
            splitLevelClassName="overflow-hidden pb-0.5 sm:pb-1 md:pb-1"
            transition={{ type: "spring", damping: 30, stiffness: 400 }}
            rotationInterval={2000}
          />
        </div>

        <p className="mt-4 text-gray-300 text-lg">
          Software Engineer • Frontend & Full-Stack dev • Building clean, high-performance web apps.
        </p>

        <div className="mt-8 flex gap-4">
          <Link to="/projects" className="px-6 py-3 bg-[var(--brand)] text-white-950 rounded font-semibold hover:opacity-90 transition">
            See Projects
          </Link>
          <Link to="/contact" className="px-6 py-3 border border-gray-700 rounded text-gray-200 hover:bg-white/5 transition">
            Contact
          </Link>
        </div>

        {/* ... (Your stats grid here) ... */}
        
        {/* --- FIXED LOGO LOOP SECTION --- */}
        <div className="mt-20">
            <h3 className="text-xl font-semibold text-center mb-8 text-gray-400"> Technologies I use </h3>
            <div style={{ height: '100px', width: '100%', position: 'relative' }}>
                <LogoWall
                    logos={logoData} // FIX 1: Changed 'items' to 'logos'
                    renderItem={(logo, index) => ( // FIX 2: Added renderItem to handle the object
                        <div key={index} className="flex flex-col items-center justify-center mx-4 gap-2">
                            <img 
                                src={logo.imgUrl} 
                                alt={logo.altText} 
                                style={{ width: '50px', height: '50px', objectFit: 'contain' }} // Standardized size
                            />
                            <span className="text-xs text-gray-500">{logo.altText}</span>
                        </div>
                    )}
                    direction='left'
                    pauseOnHover={true}
                    size='clamp(3rem, 1rem + 10vmin, 10rem)'
                    duration='20s'
                    bgColor='#060606' // Ensure this matches your background color
                    bgAccentColor='#111111'
                />
            </div>
        </div>
        {/* ----------------------------- */}

      </motion.div>
    </section>
  )
}