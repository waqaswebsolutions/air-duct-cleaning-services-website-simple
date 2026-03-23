'use client'
import { useState } from 'react'

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  })
  const [status, setStatus] = useState('')
  const [loading, setLoading] = useState(false)

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    setStatus('')

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      const data = await response.json()

      if (response.ok) {
        setStatus('success')
        setFormData({ name: '', email: '', phone: '', message: '' })
        setTimeout(() => setStatus(''), 5000)
      } else {
        setStatus('error')
        setTimeout(() => setStatus(''), 5000)
      }
    } catch (error) {
      setStatus('error')
      setTimeout(() => setStatus(''), 5000)
    } finally {
      setLoading(false)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="bg-white p-8 rounded-lg shadow-md border-t-4 border-accent">
      <h2 className="text-2xl font-bold mb-6 text-primary">Get a Free Estimate</h2>
      
      <div className="space-y-4">
        <div>
          <label className="block text-textDark mb-2">Name *</label>
          <input
            type="text"
            name="name"
            required
            value={formData.name}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary focus:border-transparent"
          />
        </div>
        
        <div>
          <label className="block text-textDark mb-2">Email *</label>
          <input
            type="email"
            name="email"
            required
            value={formData.email}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary focus:border-transparent"
          />
        </div>
        
        <div>
          <label className="block text-textDark mb-2">Phone *</label>
          <input
            type="tel"
            name="phone"
            required
            value={formData.phone}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary focus:border-transparent"
          />
        </div>
        
        <div>
          <label className="block text-textDark mb-2">Message</label>
          <textarea
            name="message"
            rows="4"
            value={formData.message}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary focus:border-transparent"
          ></textarea>
        </div>
        
        <button
          type="submit"
          disabled={loading}
          className="w-full bg-accent text-white px-6 py-3 rounded-lg shadow-md hover:scale-105 transition-all cursor-pointer disabled:opacity-50 disabled:hover:scale-100 font-semibold"
        >
          {loading ? 'Sending...' : 'Submit Request'}
        </button>
        
        {status === 'success' && (
          <div className="bg-success/10 text-success p-3 rounded-lg text-center border border-success/20">
            ✓ Thank you! We'll contact you soon.
          </div>
        )}
        
        {status === 'error' && (
          <div className="bg-red-100 text-red-600 p-3 rounded-lg text-center">
            ⚠ Something went wrong. Please try again.
          </div>
        )}
      </div>
    </form>
  )
}