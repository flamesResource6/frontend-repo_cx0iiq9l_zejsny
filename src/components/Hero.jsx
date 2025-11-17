import { motion } from 'framer-motion'

export default function Hero({ onShop }) {
  return (
    <section className="relative h-[90vh] w-full bg-white">
      <div className="absolute inset-0 overflow-hidden">
        <div className="h-full w-full grid grid-cols-1 md:grid-cols-3">
          <div className="bg-[url('https://images.unsplash.com/photo-1760764541302-e3955fbc6b2b?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxjZXJhbWljJTIwcG90dGVyeSUyMGhhbmRtYWRlfGVufDB8MHx8fDE3NjMzMDU0MTN8MA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80')] bg-cover bg-center" />
          <div className="bg-[url('https://images.unsplash.com/photo-1516822003754-cca485356ecb?q=80&w=1400&auto=format&fit=crop')] bg-cover bg-center hidden md:block" />
          <div className="bg-[url('https://images.unsplash.com/photo-1537832816519-689ad163238b?q=80&w=1400&auto=format&fit=crop')] bg-cover bg-center hidden md:block" />
        </div>
        <div className="absolute inset-0 bg-white/30 mix-blend-screen" />
      </div>
      <div className="relative z-10 h-full flex items-center justify-center text-center px-6">
        <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
          <h1 className="text-5xl md:text-7xl font-serif tracking-tight text-gray-900">iris & fantasia</h1>
          <p className="mt-4 text-gray-700 text-lg">Unique Crochet Pieces, Handmade in Paris.</p>
          <button onClick={onShop} className="mt-8 inline-flex items-center px-6 py-3 bg-black text-white hover:bg-gray-900 transition rounded-full">
            Shop the Collection
          </button>
        </motion.div>
      </div>
    </section>
  )
}
