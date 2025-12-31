import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<div>Home</div>} />
        <Route path="/books/:genre" element={<div>Books</div>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
