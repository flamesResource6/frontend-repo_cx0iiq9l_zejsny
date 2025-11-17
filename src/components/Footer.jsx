import { useState } from 'react'
import { API_BASE, fetchJSON } from '../lib/api'

export default function Footer() {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState('')
  const subscribe = async (e) => {
    e.preventDefault()
    setStatus('')
    try {
      await fetchJSON('/api/subscribe', { method: 'POST', body: JSON.stringify({ email }) })
      setStatus('Thank you for joining!')
      setEmail('')
    } catch (e) {
      setStatus('Something went wrong. Please try again.')
    }
  }
  return (
    <footer className="bg-white border-t border-gray-200 mt-20">
      <div className="max-w-6xl mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <h4 className="font-serif text-2xl text-gray-900">iris & fantasia</h4>
          <p className="mt-2 text-gray-600">Artisanal crochet. Handmade in Paris.</p>
        </div>
        <form onSubmit={subscribe} className="md:justify-self-end">
          <label className="block text-sm text-gray-700 mb-2">Join our newsletter</label>
          <div className="flex gap-2">
            <input value={email} onChange={(e)=>setEmail(e.target.value)} required type="email" placeholder="you@example.com" className="border border-gray-300 px-3 py-2 rounded w-full" />
            <button className="px-4 py-2 bg-black text-white rounded">Sign up</button>
          </div>
          {status && <p className="mt-2 text-sm text-gray-600">{status}</p>}
        </form>
      </div>
      <div className="text-center text-sm text-gray-500 py-4">© {new Date().getFullYear()} iris & fantasia</div>
    </footer>
  )
}
