import { Link } from 'react-router-dom'

const cats = [
  { key: 'bikinis', img: 'https://images.unsplash.com/photo-1620646285208-cf86a51479a5?q=80&w=1400&auto=format&fit=crop', label: 'Bikinis' },
  { key: 'beanies', img: 'https://images.unsplash.com/photo-1519681393784-d120267933ba?q=80&w=1400&auto=format&fit=crop', label: 'Beanies' },
  { key: 'mittens', img: 'https://images.unsplash.com/photo-1619377995207-ea6d12e6b893?q=80&w=1400&auto=format&fit=crop', label: 'Mittens' },
]

export default function Categories() {
  return (
    <section className="bg-white py-20">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-6">
        {cats.map(c => (
          <Link key={c.key} to={`/?category=${c.key}`} className="relative group h-72 md:h-96 overflow-hidden rounded-lg">
            <img src={c.img} alt={c.label} className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition" />
            <div className="absolute inset-0 bg-black/10" />
            <div className="absolute bottom-4 left-4 text-white text-2xl font-serif">{c.label}</div>
          </Link>
        ))}
      </div>
    </section>
  )
}
