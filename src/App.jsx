
import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import Home from './components/Home'
import Products from './components/Products'
import { QueryClient, QueryClientProvider } from 'react-query'
import { ReactQueryDevtools } from 'react-query/devtools'


function App() {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        staleTime: 10000
      },
    },
  })


  return (
    <Router>
    <QueryClientProvider client={queryClient}>

      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/products" element={<Products/>} />
        <Route path="/products/:productId" element={<Products/>} />
        <Route path="*" element={<h1>Not Found</h1>} />
      </Routes>
      <ReactQueryDevtools initialIsOpen={false} />

      </QueryClientProvider>
    </Router>
  )
}

export default App
