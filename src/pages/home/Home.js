import { useFetch } from "../../hooks/useFetch"
import "./Home.css"

// componets
import RecipeList from "../../components/RecipeList"

const Home = props => {
  const { data, isPending, error } = useFetch("http://localhost:3000/recipes")

  return (
    <div className="home">
      {error && <p className="error">{error}</p>}
      {isPending && <p className="loading">Loading...</p>}
      {data && <RecipeList recipes={data} />}
    </div>
  )
}

export default Home
