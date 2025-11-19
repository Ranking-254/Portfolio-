import React from 'react'
import { NavLink } from 'react-router-dom'
import { motion } from 'framer-motion'

const links = [
    { to: '/', label: 'Home' },
    { to: '/about', label: 'About' },
    { to: '/projects', label: 'Projects' },
    { to: '/experience', label: 'Experience' },
    { to: '/contact', label: 'Contact' }
]

export default function Navbar() {
    return (
        <motion.nav
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="bg-[var(--surface)] border-b border-gray-800"
        >
            <div className="container mx-auto px-6 py-4 flex items-center justify-between">
                <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 rounded-full bg-[var(--brand)] flex items-center justify-center text-black font-bold">🌀</div>
                    <div>
                        <div className="text-white font-bold">Pattin Mugambi</div>
                        <div className="text-xs text-muted">Software Engineer</div>
                    </div>
                </div>

                <div className="hidden md:flex space-x-6 items-center">
                    {links.map(l => (
                        <NavLink key={l.to} to={l.to} className={({ isActive }) =>
                            `text-sm ${isActive ? 'text-[var(--brand)] font-semibold' : 'text-gray-300 hover:text-white'}`
                        }>
                            {l.label}
                        </NavLink>
                    ))}
                    <a href="/contact" className="ml-4 inline-block px-4 py-2 rounded-md bg-[var(--brand)] text-black font-semibold text-sm">Hire Me</a>
                </div>

                {/* Mobile - simple */}
                <div className="md:hidden text-gray-300">
                    <MobileMenu links={links} />
                </div>
            </div>
        </motion.nav>
    )
}

function MobileMenu({ links }) {
    const [open, setOpen] = React.useState(false)
    return (
        <div className="relative">
            <button onClick={() => setOpen(v => !v)} className="p-2 rounded bg-gray-800">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none"><path d="M4 6h16M4 12h16M4 18h16" stroke="white" strokeWidth="2" strokeLinecap="round" /></svg>
            </button>
            {open && (
                <div className="absolute right-0 mt-2 w-44 bg-[var(--surface)] border border-gray-800 rounded shadow-lg p-3 space-y-2">
                    {links.map(l => (
                        <NavLink key={l.to} to={l.to} onClick={() => setOpen(false)} className="block text-gray-200">{l.label}</NavLink>
                    ))}
                    <a href="/contact" onClick={() => setOpen(false)} className="block mt-2 px-3 py-2 bg-[var(--brand)] text-black rounded text-center">Hire Me</a>
                </div>
            )}
        </div>
    )
}
