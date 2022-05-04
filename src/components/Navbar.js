import "./Navbar.css"
import { Link } from "react-router-dom"
import Searchbar from "../components/Searchbar"

const Navbar = props => {
  return (
    <div className="navbar">
      <nav>
        <Link to="/" className="brand">
          <h1>Cooking Ninja</h1>
        </Link>

        <Searchbar />
        <Link to="/create">
          <h1>Create Recipe</h1>
        </Link>
      </nav>
    </div>
  )
}

export default Navbar
