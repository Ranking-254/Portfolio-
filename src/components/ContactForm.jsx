import React from 'react'

export default function ContactForm() {
    const [form, setForm] = React.useState({ name: '', email: '', message: '' })

    function handleChange(e) {
        setForm({ ...form, [e.target.name]: e.target.value })
    }

    function handleSubmit(e) {
        e.preventDefault()
        // Open user's email client with prefilled content
        const subject = encodeURIComponent(`Contact from ${form.name} via portfolio`)
        const body = encodeURIComponent(`Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`)
        window.location.href = `mailto:your.email@domain.com?subject=${subject}&body=${body}`
    }

    return (
        <form onSubmit={handleSubmit} className="max-w-xl">
            <label className="block text-sm text-gray-300">Name</label>
            <input required name="name" value={form.name} onChange={handleChange} className="w-full mt-1 p-3 bg-[var(--bg)] border border-gray-800 rounded" />
            <label className="block text-sm text-gray-300 mt-4">Email</label>
            <input required name="email" value={form.email} onChange={handleChange} className="w-full mt-1 p-3 bg-[var(--bg)] border border-gray-800 rounded" />
            <label className="block text-sm text-gray-300 mt-4">Message</label>
            <textarea required name="message" value={form.message} onChange={handleChange} rows="6" className="w-full mt-1 p-3 bg-[var(--bg)] border border-gray-800 rounded" />
            <div className="mt-4">
                <button type="submit" className="px-5 py-3 bg-[var(--brand)] text-black rounded font-semibold">Send</button>
                <form action="https://formspree.io/f/xnnwryop" method="POST" target="_blank" className="inline ml-3">
  <input type="hidden" name="name" value={form.name} />
  <input type="hidden" name="email" value={form.email} />
  <input type="hidden" name="message" value={form.message} />
  <input type="hidden" name="_next" value="https://pattin-portfolio.vercel.app/contact" />
  <button type="submit" className="text-sm text-gray-400 underline">
    Or connect via Formspree
  </button>
</form>

            </div>
        </form>
    )
}
