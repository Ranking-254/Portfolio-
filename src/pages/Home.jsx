import React from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

export default function Home() {
    return (
        <section className="max-w-4xl mx-auto">
            <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
                <h1 className="text-4xl md:text-6xl font-bold">Pattin Mugambi</h1>
                <p className="mt-4 text-gray-300 text-lg">Software Engineer • Frontend & Full-Stack dev • Building clean, high-performance web apps.</p>

                <div className="mt-8 flex gap-4">
                    <Link to="/projects" className="px-6 py-3 bg-[var(--brand)] text-black rounded font-semibold">See Projects</Link>
                    <Link to="/contact" className="px-6 py-3 border border-gray-700 rounded text-gray-200">Contact</Link>
                </div>

                <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="p-6 bg-[rgba(255,255,255,0.02)] rounded">
                        <div className="text-sm text-gray-400">Experience</div>
                        <div className="text-xl font-semibold mt-2">3+ years</div>
                    </div>
                    <div className="p-6 bg-[rgba(255,255,255,0.02)] rounded">
                        <div className="text-sm text-gray-400">Open to</div>
                        <div className="text-xl font-semibold mt-2">Full-time / Freelance</div>
                    </div>
                    <div className="p-6 bg-[rgba(255,255,255,0.02)] rounded">
                        <div className="text-sm text-gray-400">Location</div>
                        <div className="text-xl font-semibold mt-2">Nairobi, Kenya</div>
                    </div>
                </div>
            </motion.div>
        </section>
    )
}
