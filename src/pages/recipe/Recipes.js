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
      <>
        <h2 className="page-title">{recipe && recipe.title}</h2>
        <p>Takes</p>
        <ul>
          {recipe &&
            recipe.ingredients.map((ing, index) => <li key={index}>{ing}</li>)}
        </ul>
        <p>{recipe && recipe.method} </p>
        {/* <p>{recipe && recipe.ingredients} </p>
         */}
      </>
    </div>
  )
}

export default Recipes
