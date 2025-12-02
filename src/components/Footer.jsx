import React from 'react'
import { FaGithub, FaLinkedin, FaTwitter, FaInstagram, FaWhatsapp } from 'react-icons/fa'


export default function Footer() {
    return (
        <footer className="bg-[var(--surface)] border-t border-gray-800 mt-12">
            <div className="container mx-auto px-6 py-6 flex flex-col md:flex-row items-center justify-between">
                <div className="text-sm text-gray-400">© {new Date().getFullYear()} Pattin Mugambi. All rights reserved.</div>
                <div className="flex space-x-4 mt-3 md:mt-0">
                    <a href="https://github.com/Ranking-254" className="text-gray-300 hover:text-white" target="_blank" rel="noopener noreferrer"><FaGithub size={24} /></a>
                    <a href="https://www.linkedin.com/in/pattin-njue-a789412b0?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white"> <FaLinkedin size={24} /></a>
                    <a href="https://x.com/NjuePattin?t=PzrpeIWy5cPN7hFZ_YfFlw&s=09" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white"><FaTwitter size={24} /></a>
                    <a href="https://wa.me/+254716700151" className="text-gray-300 hover:text-white" target="_blank" rel="noopener noreferrer"><FaWhatsapp size={24} /></a>
                   <a href="https://www.instagram.com/pattin_njue?igsh=MWJqZjVqZjV2ZW56cg==" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white"><FaInstagram size={24} /></a>


                </div>
            </div>
        </footer>
    )
}
