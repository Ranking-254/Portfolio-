import React from 'react'

export default function ContactForm() {
    // We keep the state to control the inputs, making it a "Controlled Component"
    const [form, setForm] = React.useState({ name: '', email: '', message: '' })

    function handleChange(e) {
        setForm({ ...form, [e.target.name]: e.target.value })
    }

    // No handleSubmit function needed! The 'action' attribute handles it.

    return (
        <form 
            action="https://formspree.io/f/xnnwryop" 
            method="POST" 
            className="max-w-xl"
        >
            {/* 1. Name Input */}
            <label className="block text-sm text-gray-300">Name</label>
            <input 
                required 
                name="name" 
                value={form.name} 
                onChange={handleChange} 
                className="w-full mt-1 p-3 bg-[var(--bg)] border border-gray-800 rounded focus:border-[var(--brand)] outline-none transition-colors" 
            />

            {/* 2. Email Input */}
            <label className="block text-sm text-gray-300 mt-4">Email</label>
            <input 
                required 
                type="email" 
                name="email" 
                value={form.email} 
                onChange={handleChange} 
                className="w-full mt-1 p-3 bg-[var(--bg)] border border-gray-800 rounded focus:border-[var(--brand)] outline-none transition-colors" 
            />

            {/* 3. Message Input */}
            <label className="block text-sm text-gray-300 mt-4">Message</label>
            <textarea 
                required 
                name="message" 
                value={form.message} 
                onChange={handleChange} 
                rows="6" 
                className="w-full mt-1 p-3 bg-[var(--bg)] border border-gray-800 rounded focus:border-[var(--brand)] outline-none transition-colors" 
            />

            {/* 4. Formspree Redirect (Optional: Redirects user back to contact page after sending) */}
            <input type="hidden" name="_next" value="https://pattin-portfolio.vercel.app/contact" />
            
            {/* 5. Subject Line (Optional: Makes your email inbox look cleaner) */}
            <input type="hidden" name="_subject" value="New submission from Portfolio!" />

            <div className="mt-6">
                <button 
                    type="submit" 
                    className="w-full sm:w-auto px-6 py-3 bg-[var(--brand)] text-white font-bold rounded hover:opacity-90 transition-opacity"
                >
                    Send Message
                </button>
            </div>
        </form>
    )
}