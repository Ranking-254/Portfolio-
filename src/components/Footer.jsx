import React from 'react'
import { FaGithub, FaLinkedin, FaTwitter, FaInstagram, FaWhatsapp } from 'react-icons/fa'
import { Terminal } from 'lucide-react'


export default function Footer() {
    return (
        <footer className="bg-[var(--surface)] border-t border-gray-800 mt-12">
            <div className="container mx-auto px-6 py-6 flex flex-col md:flex-row items-center justify-between gap-4 md:gap-0">
                {/* Left: Copyright */}
                <div className="text-sm text-gray-400">© {new Date().getFullYear()} Pattin Mugambi. All rights reserved.</div>
                
                {/* Center: Powered by SYSTX.INFRA */}
                <a 
                    href="https://systx-infra.vercel.app" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm text-gray-400 hover:text-emerald-400 transition-colors group"
                >
                    <span>Powered by</span>
                    <span className="font-mono font-bold text-emerald-500 group-hover:text-emerald-400 flex items-center gap-1">
                        <Terminal size={14} />
                        SYSTX.INFRA
                    </span>
                </a>
                
                {/* Right: Social Icons */}
                <div className="flex space-x-4 mt-3 md:mt-0">
                    <a href="https://github.com/Ranking-254" className="text-gray-300 hover:text-white transition-colors" target="_blank" rel="noopener noreferrer">
                        <FaGithub size={24} />
                    </a>
                    <a href="https://www.linkedin.com/in/pattin-njue-a789412b0" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white transition-colors">
                        <FaLinkedin size={24} />
                    </a>
                    <a href="https://x.com/NjuePattin" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white transition-colors">
                        <FaTwitter size={24} />
                    </a>
                    <a href="https://wa.me/+254716700151" className="text-gray-300 hover:text-white transition-colors" target="_blank" rel="noopener noreferrer">
                        <FaWhatsapp size={24} />
                    </a>
                    <a href="https://www.instagram.com/pattin_njue" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white transition-colors">
                        <FaInstagram size={24} />
                    </a>
                </div>
            </div>
        </footer>
    )
}