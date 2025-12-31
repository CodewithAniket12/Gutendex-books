import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home.jsx'
import Books from './pages/Books.jsx'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="books/:genre" element={<Books />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
