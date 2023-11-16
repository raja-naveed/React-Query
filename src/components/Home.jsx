import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div>
         <div className="font-sans">
      {/* Header */}
      <header className="bg-gray-800 text-white p-4">
        <nav className="flex items-center justify-between">
          <div>
            <a href="#" className="text-xl font-bold">Your Logo</a>
          </div>
          <div>
            <a href="#" className="mr-4">Home</a>
            <Link to="/products" className="mr-4">Products</Link>
          </div>
        </nav>
      </header>

      {/* Main Content */}
      <main className="p-4">
        {/* Your main content goes here */}
      </main>
    </div>
    </div>
  )
}

export default Home
