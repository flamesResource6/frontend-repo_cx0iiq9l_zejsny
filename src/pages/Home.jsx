import { useEffect, useMemo, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import { fetchJSON } from '../lib/api'
import Hero from '../components/Hero'
import Values from '../components/Values'
import Categories from '../components/Categories'
import ProductCard from '../components/ProductCard'
import ProductModal from '../components/ProductModal'

export default function Home() {
  const [products, setProducts] = useState([])
  const [open, setOpen] = useState(null)
  const [params] = useSearchParams()
  const category = params.get('category') || undefined

  useEffect(() => {
    const load = async () => {
      try {
        const data = await fetchJSON(`/api/products${category ? `?category=${category}`:''}`)
        setProducts(data)
      } catch (e) {
        setProducts([])
      }
    }
    load()
  }, [category])

  return (
    <div className="bg-white">
      <Hero onShop={() => window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })} />
      <Values />
      <section className="max-w-6xl mx-auto px-6 py-16">
        <div className="flex items-end justify-between">
          <h2 className="font-serif text-3xl text-gray-900">{category ? category.charAt(0).toUpperCase()+category.slice(1) : 'Featured Pieces'}</h2>
        </div>
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {products.map(p => (
            <ProductCard key={p.id || p.slug} product={p} onOpen={setOpen} />
          ))}
        </div>
      </section>
      <Categories />
      <ProductModal product={open} onClose={() => setOpen(null)} onAdd={(p)=>{
        alert('Added to cart (demo). Checkout flow can be enabled next.')
      }} />
    </div>
  )
}
