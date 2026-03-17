import React from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import RotatingText from '../components/RotatingText'
import LogoWall from '../components/LogoLoop'

// Define your logos
const logoData = [
  { imgUrl: 'https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg', altText: "React" },
  { imgUrl: 'https://upload.wikimedia.org/wikipedia/commons/d/d9/Node.js_logo.svg', altText: "Node.js" },
  { imgUrl: 'https://www.vectorlogo.zone/logos/mongodb/mongodb-icon.svg', altText: "MongoDB" },
  { imgUrl: 'https://upload.wikimedia.org/wikipedia/commons/6/64/Expressjs.png', altText: "Express" },
  { imgUrl: 'https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg', altText: "Tailwind" },
  { imgUrl: 'https://www.vectorlogo.zone/logos/git-scm/git-scm-icon.svg', altText: "Git" },
  { imgUrl: "https://www.vectorlogo.zone/logos/docker/docker-icon.svg", altText: "Docker" },
  { imgUrl: "https://www.vectorlogo.zone/logos/supabase/supabase-icon.svg", altText: "Supabase" },
  { imgUrl: "https://www.vectorlogo.zone/logos/nextjs/nextjs-icon.svg", altText: "Next.js" },
  { imgUrl: "https://www.vectorlogo.zone/logos/typescriptlang/typescriptlang-icon.svg", altText: "TypeScript" },

]

export default function Home() {
  return (
    <section className="w-full max-w-full overflow-hidden px-4 md:px-6 mx-auto pb-20pt-16 md:pt-0">
      <motion.div 
        initial={{ opacity: 0, y: 10 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-4xl md:text-6xl font-bold">Pattin Mugambi</h1>

        {/* --- YOUR HERO SECTION (Kept exactly as you shared) --- */}
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
        {/* ----------------------------------------------------- */}

        <p className="mt-4 text-gray-300 text-lg">
          Software Engineer • Frontend & Full-Stack dev • Building clean, high-performance web apps.
        </p>

        <div className="mt-8 flex gap-4">
          <a href="#projects" className="px-6 py-3 bg-[var(--brand)] text-white rounded font-semibold hover:opacity-90 transition">
            See Projects
          </a>
          <a href="#contact" className="px-6 py-3 border border-gray-700 rounded text-gray-200 hover:bg-white/5 transition">
            Contact
          </a>
        </div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 bg-[rgba(255,255,255,0.02)] border border-white/5 rounded">
            <div className="text-sm text-gray-400">Experience</div>
            <div className="text-xl font-semibold mt-2">2+ years</div>
          </div>
          <div className="p-6 bg-[rgba(255,255,255,0.02)] border border-white/5 rounded">
            <div className="text-sm text-gray-400">Open to</div>
            <div className="text-xl font-semibold mt-2">Full-time / Freelance</div>
          </div>
          <div className="p-6 bg-[rgba(255,255,255,0.02)] border border-white/5 rounded">
            <div className="text-sm text-gray-400">Location</div>
            <div className="text-xl font-semibold mt-2">Nairobi, Kenya</div>
          </div>
        </div>

        {/* --- FIXED LOGO WALL (Mobile Friendly) --- */}
        <div className="mt-12 md:mt-20">
            <h3 className="text-xl font-semibold text-center mb-6 text-gray-400"> Technologies I use </h3>
            
            {/* Added height control: h-[120px] on mobile */}
            <div className="h-[120px] md:h-[150px] w-full relative overflow-hidden">
                <LogoWall
                    logos={logoData}
                    renderItem={(logo, index) => (
                        <div key={index} className="flex flex-col items-center justify-center mx-4 gap-2">
                            <img 
                                src={logo.imgUrl} 
                                alt={logo.altText} 
                                // Added size control: w-10 h-10 on mobile
                                className="w-10 h-10 md:w-12 md:h-12 object-contain"
                            />
                            <span className="text-xs text-gray-500">{logo.altText}</span>
                        </div>
                    )}
                    direction='left'
                    pauseOnHover={true}
                    size='clamp(2rem, 1rem + 10vmin, 3rem)' // Reduced clamp size
                    duration='20s'
                    bgColor='transparent'
                    bgAccentColor='transparent'
                />
            </div>
        </div>
        {/* ------------------------------------------ */}

      </motion.div>
    </section>
  )
}