import React from 'react'
import ContactForm from '../components/ContactForm'

export default function Contact() {
    return (
        <section className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold">Contact</h2>
            <p className="text-gray-400 mt-2">Want to work together? Send me a message.</p>
            <div className="mt-6">
                <ContactForm />
            </div>
        </section>
    )
}
