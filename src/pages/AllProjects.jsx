import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom'; 
import { allData } from '../data/projects'; // <--- Directly importing your entire absolute raw dataset array

const AllProjects = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  // 1. Process all raw projects and normalize layout category badges dynamically
  const projectsData = useMemo(() => {
    return allData.map(project => {
      // Assign custom filtering tags dynamically based on the project properties
      let category = 'Frontend';
      const titleLower = project.title.toLowerCase();
      const summaryLower = project.summary.toLowerCase();
      const techString = project.tech ? project.tech.join(' ').toLowerCase() : '';

      if (techString.includes('mongodb') || techString.includes('node') || techString.includes('supabase') || techString.includes('clerk')) {
        category = 'MERN / Fullstack';
      } else if (titleLower.includes('systx') || summaryLower.includes('infra')) {
        category = 'Infrastructure';
      }

      return {
        ...project,
        category 
      };
    });
  }, []);

  // 2. Dynamically extract unique categories for filter buttons
  const categories = useMemo(() => {
    return ['All', ...new Set(projectsData.map(p => p.category))];
  }, [projectsData]);

  // 3. Filter projects based on both search input string and active category chip
  const filteredProjects = useMemo(() => {
    return projectsData.filter(project => {
      const matchesSearch = project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                            project.summary.toLowerCase().includes(searchTerm.toLowerCase()) ||
                            (project.tech && project.tech.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase())));
      
      const matchesCategory = selectedCategory === 'All' || project.category === selectedCategory;
      
      return matchesSearch && matchesCategory;
    });
  }, [searchTerm, selectedCategory, projectsData]);

  return (
    <div className="min-h-screen bg-transparent text-slate-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        
        {/* Navigation / Header */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-12 border-b border-zinc-800/60 pb-6">
          <div>
            <Link to="/" className="text-sm text-cyan-400 hover:underline mb-2 inline-block">
              &larr; Back to Main Portfolio
            </Link>
            <h1 className="text-4xl font-bold tracking-tight bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              All Projects
            </h1>
            <p className="text-zinc-400 mt-1">A comprehensive archive of everything I've built.</p>
          </div>

          {/* Search Bar */}
          <div className="w-full sm:w-64">
            <input
              type="text"
              placeholder="Search tech, title, features..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full px-4 py-2 rounded-lg bg-zinc-900/80 border border-zinc-800 text-slate-100 placeholder-zinc-500 focus:outline-none focus:border-cyan-500 transition-colors text-sm backdrop-blur-sm"
            />
          </div>
        </div>

        {/* Category Filter Chips */}
        <div className="flex flex-wrap gap-2 mb-8">
          {categories.map(category => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-1.5 rounded-full text-xs font-medium tracking-wide border transition-all ${
                selectedCategory === category
                  ? 'bg-cyan-500/10 border-cyan-500 text-cyan-400 shadow-sm'
                  : 'bg-zinc-900/60 border-zinc-800 text-zinc-400 hover:border-slate-700 hover:text-slate-200'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        {filteredProjects.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProjects.map((project) => (
              <div 
                key={project.id}
                className="group relative flex flex-col justify-between bg-zinc-900/30 border border-zinc-800/80 rounded-xl overflow-hidden hover:border-zinc-700/80 transition-all duration-300 hover:-translate-y-1 shadow-md hover:shadow-cyan-950/10 backdrop-blur-sm"
              >
                {/* Image Section */}
                <div className="relative aspect-video overflow-hidden bg-zinc-950 border-b border-zinc-800/50">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-3 left-3">
                    <span className="text-[10px] uppercase font-bold tracking-widest text-cyan-400 bg-black/80 px-2 py-0.5 rounded border border-cyan-500/20 backdrop-blur-sm">
                      {project.category}
                    </span>
                  </div>
                </div>

                {/* Content Section */}
                <div className="p-6 flex-grow flex flex-col justify-between">
                  <div>
                    <h3 className="text-xl font-semibold text-slate-100 group-hover:text-cyan-400 transition-colors">
                      {project.title}
                    </h3>
                    
                    <p className="text-zinc-400 text-sm mt-3 leading-relaxed line-clamp-4">
                      {project.summary}
                    </p>
                    
                    {project.login && (
                      <div className="mt-3 text-xs font-mono text-cyan-400 bg-cyan-950/20 border border-cyan-900/30 px-2 py-1 rounded">
                        {project.login}
                      </div>
                    )}
                  </div>

                  <div className="mt-6">
                    {/* Tech Tags */}
                    <div className="flex flex-wrap gap-1.5 mb-5">
                      {project.tech && project.tech.map(tag => tag && (
                        <span key={tag} className="text-[11px] text-zinc-500 bg-black/40 px-2 py-0.5 rounded border border-zinc-900">
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Action Links Container */}
                    <div className="flex items-center justify-between text-sm font-medium border-t border-zinc-800/50 pt-4">
                      <a 
                        href={project.link} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="text-cyan-400 hover:text-cyan-300 transition-colors flex items-center gap-1 group/link"
                      >
                        Visit Live App 
                        <span className="inline-block transition-transform group-hover/link:translate-x-0.5">&rarr;</span>
                      </a>

                      {/* Bottom Right "View Code" Link Container */}
                      <a 
                        href={project.githubLink || "https://github.com/Ranking-254"} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="text-zinc-400 hover:text-slate-100 transition-colors flex items-center gap-1 group/code"
                      >
                        Code
                        <span className="inline-block transition-transform group-hover/code:translate-x-0.5">&rarr;</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-20 border border-dashed border-zinc-800 rounded-xl bg-zinc-900/10 backdrop-blur-sm">
            <p className="text-zinc-500">No project matches your search filters.</p>
            <button 
              onClick={() => { setSearchTerm(''); setSelectedCategory('All'); }}
              className="text-sm text-cyan-400 mt-2 hover:underline"
            >
              Clear filters
            </button>
          </div>
        )}

        {/* --- ADDED BOTTOM FOOTER NAVIGATION CALLOUT --- */}
        <div className="mt-16 pt-8 border-t border-zinc-800/60 text-center">
          <p className="text-zinc-500 text-sm mb-4">Finished exploring the archive?</p>
          <Link 
            to="/" 
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-zinc-900/40 border border-zinc-800 text-sm text-zinc-300 hover:text-cyan-400 hover:border-cyan-500/30 transition-all font-medium backdrop-blur-sm group"
          >
            <span className="inline-block transition-transform group-hover:-translate-x-0.5">&larr;</span> 
            Return to Home Page
          </Link>
        </div>

      </div>
    </div>
  );
};

export default AllProjects;