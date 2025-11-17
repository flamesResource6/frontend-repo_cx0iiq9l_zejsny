import { useState } from 'react'

export default function ProductModal({ product, onClose, onAdd }) {
  if (!product) return null
  const sold = product.sold_out || !product.available

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div className="absolute inset-0 bg-black/40" onClick={onClose} />
      <div className="relative z-10 bg-white max-w-5xl w-full mx-6 grid grid-cols-1 md:grid-cols-2 gap-6 p-6 rounded-lg">
        <div className="space-y-3">
          <div className="aspect-[4/5] bg-gray-100 overflow-hidden rounded">
            <img src={product.images?.[0]} alt={product.title} className="w-full h-full object-cover" />
          </div>
          {product.images?.slice(1,4).map((img, i) => (
            <div key={i} className="aspect-[4/5] bg-gray-100 overflow-hidden rounded">
              <img src={img} alt={product.title+ i} className="w-full h-full object-cover" />
            </div>
          ))}
        </div>
        <div className="pr-2">
          <h3 className="text-2xl md:text-3xl font-serif text-gray-900">{product.title}</h3>
          <div className="mt-2 text-xl text-gray-800">€{product.price.toFixed(2)}</div>
          <button disabled={sold} onClick={() => onAdd(product)} className={`mt-4 w-full px-4 py-3 rounded-full text-white ${sold ? 'bg-gray-400 cursor-not-allowed' : 'bg-black hover:bg-gray-900'} transition`}>
            {sold ? 'Sold Out' : 'Add to Cart'}
          </button>
          <p className="mt-6 text-gray-700 leading-relaxed">{product.description}</p>
          <ul className="mt-4 space-y-1 text-gray-700">
            {(product.bullet_points?.length ? product.bullet_points : [
              'Handmade in Paris',
              '100% Italian Luxury Deadstock Wool',
              'One-of-a-Kind Piece',
              'Care: Hand wash, lay flat to dry'
            ]).map((b,i) => (
              <li key={i}>✦ {b}</li>
            ))}
          </ul>
          {product.unique && (
            <p className="mt-4 text-sm text-gray-500">This is a unique item. Once sold, it is gone forever.</p>
          )}
        </div>
      </div>
    </div>
  )
}
