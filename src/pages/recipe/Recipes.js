import "./Recipes.css"
// import { useEffect } from "react"
import { useParams } from "react-router-dom"
import { useFetch } from "../../hooks/useFetch"

const Recipes = props => {
  const { id } = useParams()
  const {
    data: recipe,
    isPending,
    error
  } = useFetch(`http://localhost:3000/recipes/${id}`)

  // useEffect(() => {
  //   if (error) {
  //     console.error(error.message)
  //   }
  // }, [error])

  // if (isPending) {
  //   return "Loading..."
  // }

  return (
    <div className="recipe">
      {error && <p className="error">{error}</p>}
      {isPending && <p className="loading">Loading...</p>}
      <h1>{recipe && recipe.title}</h1>
      <p>{recipe && recipe.ingredients} </p>
      <p>{recipe && recipe.method} </p>
    </div>
  )
}

export default Recipes
