import { useNavigate } from 'react-router-dom'

const genres = [
  'Fiction',
  'Drama',
  'Humour',
  'Politics',
  'Philosophy',
  'History',
  'Adventure',
]

function Home() {
  const navigate = useNavigate()

  return (
    <div className="page">
      <h1 className="page-title">Gutenberg Project</h1>

      <div className="genre-grid">
        {genres.map((genre) => (
          <div
            key={genre}
            className="genre-card"
            onClick={() => navigate(`/books/${genre.toLowerCase()}`)}
          >
            <p className="genre-name">{genre}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Home
