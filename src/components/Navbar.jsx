import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { useLocation } from 'react-router-dom' // <--- Dropped useNavigate, only tracking location path

const links = [
    { id: 'home', hash: '#home', label: 'Home' },
    { id: 'about', hash: '#about', label: 'About' },
    { id: 'all-projects', hash: '/all-projects', label: 'Projects' },
    { id: 'contact', hash: '#contact', label: 'Contact' }
]

export default function Navbar() {
    const location = useLocation()
    const isHomePage = location.pathname === '/'

    const handleNavigation = (target) => {
        // 1. Moving to the dedicated all-projects archive page
        if (target.id === 'all-projects') {
            window.location.href = '/all-projects'
            return
        }

        // 2. Already on the homepage -> execute smooth scroll immediately
        if (isHomePage) {
            const element = document.getElementById(target.id)
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' })
            }
        } 
        // 3. Trapped on /all-projects -> Forcibly refresh browser path back home to that specific section
        else {
            window.location.href = `/${target.hash}`
        }
    }

    return (
        <motion.nav
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="fixed w-full z-50 bg-[var(--surface)] border-b border-gray-800 backdrop-blur-md bg-opacity-90"
        >
            <div className="container mx-auto px-6 py-4 flex items-center justify-between">
                
                {/* Logo Section */}
                <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 rounded-full bg-[var(--brand)] flex items-center justify-center text-black font-bold">
                        🌀
                    </div>
                    <div>
                        <button 
                            onClick={() => handleNavigation({ id: 'home', hash: '#home' })} 
                            className="text-white font-bold block leading-tight hover:text-cyan-400 transition-colors text-left bg-transparent border-none outline-none cursor-pointer"
                        >
                            Pattin Mugambi
                        </button>
                        <span className="text-xs text-muted text-gray-400">Software Engineer</span>
                    </div>
                </div>

                {/* Desktop Menu */}
                <div className="hidden md:flex space-x-6 items-center">
                    {links.map(l => (
                        <button 
                            key={l.id} 
                            onClick={() => handleNavigation(l)}
                            className="text-sm text-gray-300 hover:text-[var(--brand)] hover:font-semibold transition-colors bg-transparent border-none outline-none cursor-pointer"
                        >
                            {l.label}
                        </button>
                    ))}
                    <button 
                        onClick={() => handleNavigation({ id: 'contact', hash: '#contact' })}
                        className="ml-4 inline-block px-4 py-2 rounded-md bg-[var(--brand)] text-white font-semibold text-sm hover:opacity-90 transition-opacity cursor-pointer border-none"
                    >
                        Hire Me
                    </button>
                </div>

                {/* Mobile Menu Button */}
                <div className="md:hidden text-gray-300">
                    <MobileMenu links={links} handleNavigation={handleNavigation} />
                </div>
            </div>
        </motion.nav>
    )
}

function MobileMenu({ links, handleNavigation }) {
    const [open, setOpen] = useState(false)

    return (
        <div className="relative">
            {/* Added standard touch tracking parameters for clean mobile response */}
            <button 
                onClick={() => setOpen(v => !v)} 
                onTouchStart={(e) => { e.stopPropagation(); }}
                className="p-2 rounded bg-gray-800 hover:bg-gray-700 transition cursor-pointer border-none text-white flex items-center justify-center"
            >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                    <path d="M4 6h16M4 12h16M4 18h16" stroke="white" strokeWidth="2" strokeLinecap="round" />
                </svg>
            </button>
            
            {open && (
                <div className="absolute right-0 mt-2 w-44 bg-neutral-900 border border-gray-800 rounded shadow-lg p-3 space-y-2 z-50">
                    {links.map(l => (
                        <button 
                            key={l.id} 
                            onClick={() => { setOpen(false); handleNavigation(l); }}
                            onTouchEnd={() => { setOpen(false); handleNavigation(l); }} // <--- Double down with native mobile touch events
                            className="block w-full text-left text-gray-200 hover:text-[var(--brand)] text-sm py-2 bg-transparent border-none outline-none cursor-pointer"
                        >
                            {l.label}
                        </button>
                    ))}
                    <button 
                        onClick={() => { setOpen(false); handleNavigation({ id: 'contact', hash: '#contact' }); }} 
                        onTouchEnd={() => { setOpen(false); handleNavigation({ id: 'contact', hash: '#contact' }); }}
                        className="block w-full mt-2 px-3 py-2 bg-[var(--brand)] text-black rounded text-center text-sm font-bold border-none outline-none cursor-pointer"
                    >
                        Hire Me
                    </button>
                </div>
            )}
        </div>
    )
}