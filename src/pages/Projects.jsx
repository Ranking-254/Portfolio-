import React from 'react';
import { Link } from 'react-router-dom';
import projects from '../data/projects'; // Correctly loads your modified 6-item data array

export default function Projects() {
  return (
    <div className="w-full">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project) => {
          
          // If it's the 6th slot item with our flag, output the Interactive Button Card
          if (project.isCTA) {
            return (
              <Link 
                key={project.id}
                to="/all-projects"
                className="group relative flex flex-col items-center justify-center border-2 border-dashed border-zinc-800 rounded-xl p-8 bg-zinc-900/20 hover:bg-zinc-900/50 hover:border-cyan-500/50 transition-all duration-300 min-h-[350px] text-center backdrop-blur-sm"
              >
                <div className="p-4 rounded-full bg-cyan-950/30 border border-cyan-800/30 group-hover:scale-110 group-hover:border-cyan-500/50 transition-transform duration-300">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 text-cyan-400">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18a8.967 8.967 0 0 0-6 2.292m0-14.25v14.25" />
                  </svg>
                </div>
                
                <h3 className="text-xl font-bold mt-4 text-zinc-100 group-hover:text-cyan-400 transition-colors">
                  View More Projects
                </h3>
                <p className="text-zinc-400 text-sm mt-2 max-w-[200px]">
                  Explore all remaining web apps, automated script setups, and architectures.
                </p>
                <span className="text-xs text-cyan-400 font-medium mt-6 inline-flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                  Browse collection &rarr;
                </span>
              </Link>
            );
          }

          // Otherwise, render your normal design template card
          return (
            <div 
              key={project.id} 
              className="group flex flex-col justify-between bg-zinc-900/30 border border-zinc-800/80 rounded-xl overflow-hidden hover:border-zinc-700/80 transition-all duration-300 backdrop-blur-sm"
            >
              <div className="relative aspect-video overflow-hidden bg-zinc-950">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              
              <div className="p-5 flex-grow flex flex-col justify-between">
                <div>
                  <h3 className="text-xl font-semibold text-zinc-100 group-hover:text-cyan-400 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-zinc-400 text-sm mt-2 line-clamp-3 leading-relaxed">
                    {project.summary}
                  </p>
                  {project.login && (
                    <div className="mt-2 text-xs font-mono text-cyan-400 bg-cyan-950/20 border border-cyan-900/30 px-2 py-1 rounded">
                      {project.login}
                    </div>
                  )}
                </div>

                <div className="mt-5">
                  <div className="flex flex-wrap gap-1 mb-4">
                    {project.tech.map((t) => (
                      <span key={t} className="text-[11px] text-zinc-500 bg-zinc-950 px-2 py-0.5 rounded border border-zinc-900">
                        {t}
                      </span>
                    ))}
                  </div>

                  <a 
                    href={project.link} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="inline-flex items-center text-sm font-medium text-cyan-400 hover:text-cyan-300 transition-colors"
                  >
                    Visit Project <span className="ml-1 group-hover:translate-x-0.5 transition-transform">&rarr;</span>
                  </a>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}