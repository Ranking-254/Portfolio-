import React from 'react'
import { motion } from 'framer-motion'

export default function ProjectCard({ project }) {
    return (
        <motion.a
            href={project.link || '#'} target="_blank" rel="noreferrer"
            whileHover={{ scale: 1.02 }}
            className="block bg-[rgba(255,255,255,0.03)] border border-gray-800 rounded-lg overflow-hidden"
        >
            <div className="h-44 bg-gradient-to-br from-black to-gray-900 flex items-center justify-center">
                {project.image ? <img src={project.image} alt={project.title} className="object-cover h-full w-full" loading="lazy" />
                    : <div className="text-muted">{project.title}</div>}
            </div>
            <div className="p-4">
                <h3 className="font-semibold text-white">{project.title}</h3>
                <h3 className="font-semibold text-sm text">{project.login}</h3>
                <p className="text-sm text-gray-400 mt-1">{project.summary}</p>
                <div className="mt-3 flex items-center justify-between">
                    <div className="text-xs text-muted">{project.tech.join(' • ')}</div>
                    <div className="text-xs text-[var(--brand)]">View</div>
                </div>
            </div>
        </motion.a>
    )
}
