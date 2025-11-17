import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import Story from './pages/Story'
import Sustainability from './pages/Sustainability'

function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/story" element={<Story />} />
        <Route path="/sustainability" element={<Sustainability />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App
