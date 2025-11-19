import React from 'react'
import projects from '../data/projects'
import ProjectCard from '../components/ProjectCard'

export default function Projects() {
    return (
        <section>
            <h2 className="text-3xl font-bold">Projects</h2>
            <p className="text-gray-400 mt-2">Selected work — click to view.</p>

            <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6">
                {projects.map(p => <ProjectCard key={p.id} project={p} />)}
            </div>
        </section>
    )
}
