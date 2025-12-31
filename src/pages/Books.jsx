import { useParams } from 'react-router-dom'

export default function Books() {
      const { genre } = useParams()
   return (
    <div>
      <h1>{genre}</h1>
    </div>
  )
}
