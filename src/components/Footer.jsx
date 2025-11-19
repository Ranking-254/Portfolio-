import React from 'react'

export default function Footer() {
    return (
        <footer className="bg-[var(--surface)] border-t border-gray-800 mt-12">
            <div className="container mx-auto px-6 py-6 flex flex-col md:flex-row items-center justify-between">
                <div className="text-sm text-gray-400">© {new Date().getFullYear()} Pattin Mugambi. All rights reserved.</div>
                <div className="flex space-x-4 mt-3 md:mt-0">
                    <a href="#" className="text-gray-300 hover:text-white">GitHub</a>
                    <a href="#" className="text-gray-300 hover:text-white">LinkedIn</a>
                    <a href="#" className="text-gray-300 hover:text-white">Twitter</a>
                   


                </div>
            </div>
        </footer>
    )
}
