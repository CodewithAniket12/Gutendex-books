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
    <div>
      <h1>Gutenberg Project</h1>

      {genres.map((genre) => (
        <button
          key={genre}
          onClick={() => navigate(`/books/${genre.toLowerCase()}`)}
        >
          {genre}
        </button>
      ))}
    </div>
  )
}

export default Home
