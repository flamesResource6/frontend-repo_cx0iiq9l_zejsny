import { Wool, Hand, Landmark } from 'lucide-react'

export default function Values() {
  return (
    <section className="bg-white py-16">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-10">
        <div className="text-center">
          <div className="mx-auto h-12 w-12 flex items-center justify-center rounded-full border border-gray-200">
            <Wool className="h-6 w-6" />
          </div>
          <h3 className="mt-4 font-medium text-gray-900">Italian Luxury Deadstock</h3>
          <p className="text-gray-600 text-sm">Exceptional yarns, reborn.</p>
        </div>
        <div className="text-center">
          <div className="mx-auto h-12 w-12 flex items-center justify-center rounded-full border border-gray-200">
            <Hand className="h-6 w-6" />
          </div>
          <h3 className="mt-4 font-medium text-gray-900">One-of-a-Kind & Handmade</h3>
          <p className="text-gray-600 text-sm">Every stitch tells a story.</p>
        </div>
        <div className="text-center">
          <div className="mx-auto h-12 w-12 flex items-center justify-center rounded-full border border-gray-200">
            <Landmark className="h-6 w-6" />
          </div>
          <h3 className="mt-4 font-medium text-gray-900">Crafted in Paris</h3>
          <p className="text-gray-600 text-sm">From our atelier to you.</p>
        </div>
      </div>
    </section>
  )
}
