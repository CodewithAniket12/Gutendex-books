import { useNavigate } from 'react-router-dom'

function Header({ title }) {
  const navigate = useNavigate()

  return (
    <div className="header">
      <button className="back-button" onClick={() => navigate(-1)}>
        ←
      </button>
      <h2 className="header-title">{title}</h2>
    </div>
  )
}

export default Header
