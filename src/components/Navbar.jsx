import { Link, NavLink } from 'react-router-dom'

export default function Navbar() {
  return (
    <header className="bg-white/80 backdrop-blur supports-backdrop-blur sticky top-0 z-40">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link to="/" className="font-serif text-2xl text-gray-900">iris & fantasia</Link>
        <nav className="hidden md:flex items-center gap-6 text-gray-700">
          <NavLink to="/?category=bikinis">Bikinis</NavLink>
          <NavLink to="/?category=beanies">Beanies</NavLink>
          <NavLink to="/?category=mittens">Mittens</NavLink>
          <NavLink to="/story">Our Story</NavLink>
          <NavLink to="/sustainability">Sustainability</NavLink>
        </nav>
      </div>
    </header>
  )
}
