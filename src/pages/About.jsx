import React from 'react'
import { motion } from 'framer-motion'

export default function About() {
    return (
        <motion.section initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold">About Me</h2>
            <p className="mt-4 text-gray-300">I’m a software engineer passionate about building performant and accessible web applications. I specialise in React, have experience with backend APIs and love clean UI & UX.</p>


            <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-[rgba(255,255,255,0.02)] p-4 rounded">
                    <h4 className="font-semibold">Skills</h4>
                    <ul className="mt-2 text-gray-300 space-y-1">
                        <li>React • Vite • Tailwind</li>
                        <li>Node.js • Express</li>
                        <li>MongoDB • REST APIs</li>
                        <li>Unit testing • Git</li>
                    </ul>
                </div>
                <div className="bg-[rgba(255,255,255,0.02)] p-4 rounded">
                    <h4 className="font-semibold">Tools</h4>
                    <ul className="mt-2 text-gray-300 space-y-1">
                        <li>VSCode • Postman</li>
                        <li>Figma • Chrome DevTools</li>
                        <li>Vercel • Netlify</li>
                    </ul>
                </div>
            </div>
        </motion.section>
    )
}
