export default function ProductCard({ product, onOpen }) {
  const sold = product.sold_out || !product.available
  return (
    <button onClick={() => onOpen(product)} className="text-left group">
      <div className="relative aspect-[4/5] bg-gray-100 overflow-hidden">
        <img src={product.images?.[0]} alt={product.title} className="w-full h-full object-cover group-hover:scale-105 transition" />
        {sold && (
          <span className="absolute top-2 left-2 bg-white/90 text-gray-900 text-xs tracking-wide px-2 py-1 rounded">Sold Out</span>
        )}
      </div>
      <div className="mt-3 flex items-baseline justify-between">
        <h4 className="font-medium text-gray-900 font-serif">{product.title}</h4>
        <span className="text-gray-700">€{product.price.toFixed(2)}</span>
      </div>
    </button>
  )
}
