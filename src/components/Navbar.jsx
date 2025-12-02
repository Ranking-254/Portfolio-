import React, { useState } from 'react'
import { motion } from 'framer-motion'

// 1. Updated links to point to IDs (#) instead of routes (/)
const links = [
    { href: '#home', label: 'Home' },
    { href: '#about', label: 'About' },
    { href: '#projects', label: 'Projects' },
    { href: '#contact', label: 'Contact' }
]

export default function Navbar() {
    return (
        <motion.nav
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
            // Added 'fixed w-full z-50' to keep navbar at the top while scrolling
            className="fixed w-full z-50 bg-[var(--surface)] border-b border-gray-800 backdrop-blur-md bg-opacity-90"
        >
            <div className="container mx-auto px-6 py-4 flex items-center justify-between">
                
                {/* Logo Section */}
                <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 rounded-full bg-[var(--brand)] flex items-center justify-center text-black font-bold">
                        🌀
                    </div>
                    <div>
                        <a href="#home" className="text-white font-bold block leading-tight">Pattin Mugambi</a>
                        <span className="text-xs text-muted text-gray-400">Software Engineer</span>
                    </div>
                </div>

                {/* Desktop Menu */}
                <div className="hidden md:flex space-x-6 items-center">
                    {links.map(l => (
                        <a 
                            key={l.href} 
                            href={l.href} 
                            className="text-sm text-gray-300 hover:text-[var(--brand)] hover:font-semibold transition-colors"
                        >
                            {l.label}
                        </a>
                    ))}
                    <a 
                        href="#contact" 
                        className="ml-4 inline-block px-4 py-2 rounded-md bg-[var(--brand)] text-white font-semibold text-sm hover:opacity-90 transition-opacity"
                    >
                        Hire Me
                    </a>
                </div>

                {/* Mobile Menu Button */}
                <div className="md:hidden text-gray-300">
                    <MobileMenu links={links} />
                </div>
            </div>
        </motion.nav>
    )
}

function MobileMenu({ links }) {
    const [open, setOpen] = useState(false)
    return (
        <div className="relative">
            <button onClick={() => setOpen(v => !v)} className="p-2 rounded bg-gray-800 hover:bg-gray-700 transition">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none"><path d="M4 6h16M4 12h16M4 18h16" stroke="white" strokeWidth="2" strokeLinecap="round" /></svg>
            </button>
            
            {open && (
                <div className="absolute right-0 mt-2 w-44 bg-neutral-900 border border-gray-800 rounded shadow-lg p-3 space-y-2">
                    {links.map(l => (
                        <a 
                            key={l.href} 
                            href={l.href} 
                            onClick={() => setOpen(false)} 
                            className="block text-gray-200 hover:text-[var(--brand)] text-sm"
                        >
                            {l.label}
                        </a>
                    ))}
                    <a 
                        href="#contact" 
                        onClick={() => setOpen(false)} 
                        className="block mt-2 px-3 py-2 bg-[var(--brand)] text-black rounded text-center text-sm font-bold"
                    >
                        Hire Me
                    </a>
                </div>
            )}
        </div>
    )
}