function BookCard({ title, author, cover }) {
  return (
    <div className="book-card">
    {cover && <img src={cover} alt={title} />}
    <p className="book-title">{title}</p>
      <p className="book-author">{author}</p>
    </div>
  )
}

export default BookCard
