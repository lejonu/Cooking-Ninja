import "./Navbar.css"
import { Link } from "react-router-dom"

const Navbar = props => {
  return (
    <div className="navbar">
      <nav>
        <Link to="/" className="brand">
          <h1>Cookin Ninja</h1>
        </Link>
        <Link to="/create">
          <h1>Create Recipe</h1>
        </Link>
      </nav>
    </div>
  )
}

export default Navbar
