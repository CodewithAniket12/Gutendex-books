const BASE_URL = 'http://skunkworks.ignitesol.com:8000/books'

export async function fetchBooksByGenre(genre) {
  const url = `${BASE_URL}?topic=${genre}&mime_type=image`

  const response = await fetch(url)

  if (!response.ok) {
    throw new Error('Failed to fetch books')
  }

  return response.json()
}
