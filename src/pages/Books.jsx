import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { fetchBooksByGenre } from '../services/api'
import BookCard from '../components/BookCard.jsx'

function Books() {
  const { genre } = useParams()
  const [books, setBooks] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    async function loadBooks() {
      try {
        setLoading(true)
        const data = await fetchBooksByGenre(genre)
        setBooks(data.results)
      } catch (err) {
        setError('Failed to load books')
      } finally {
        setLoading(false)
      }
    }

    loadBooks()
  }, [genre])

  if (loading) return <div>Loading...</div>
  if (error) return <div>{error}</div>

  return (
    <div>
  <h1>{genre}</h1>

  <div className="books-grid">
    {books.map((book) => {
    const cover = book.formats?.['image/jpeg']
    const author = book.authors?.[0]?.name || 'Unknown Author'

      return (
        <BookCard
          key={book.id}
          title={book.title}
          author={author}
          cover={cover}
        />
      )
    })}
  </div>
</div>
    ) }

export default Books
