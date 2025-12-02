import React from 'react'
import { motion } from 'framer-motion'

export default function About() {
    return (
        <motion.section initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold">About Me</h2>
            <p className="mt-4 text-gray-300">I’m a passionate Software Engineer focused on building clean, scalable, and user-centered digital experiences. I enjoy turning ideas into fully functional applications—whether it’s a smooth frontend interface, a fast backend API, or a complete end-to-end product.</p>

<p className="mt-4 text-gray-300">Over the years, I’ve worked with modern technologies like React, Node.js, Express, MongoDB, and TailwindCSS, constantly pushing myself to learn, improve, and ship high-quality work. I love solving real problems, automating processes, and creating tools that make life easier for users.</p>

<p className="mt-4 text-gray-300">When I’m not coding, I’m usually exploring new tech, designing UI concepts, or refining my existing projects. My goal is simple:
build impactful software and keep leveling up every day.

    </p>
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
                        <li>GitHub • Chrome DevTools</li>
                        <li>Vercel • Netlify</li>
                    </ul>
                </div>
            </div>
        </motion.section>
    )
}
