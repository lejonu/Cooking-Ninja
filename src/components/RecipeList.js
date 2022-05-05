import "./RecipeList.css"
import { Link } from "react-router-dom"
import TrashIcon from "../assets/TrashIcon.svg"
import { projectFirestore } from "../firebase/config"

const RecipeList = ({ recipe }) => {
  if (recipe.length === 0) {
    return <div className="error">No recipes to load...</div>
  }

  const handleClick = id => {
    projectFirestore.collection("recipes").doc(id).delete()
  }

  return (
    <div className="recipe-list">
      {recipe.map(recipe => (
        <div className="card" key={recipe.id}>
          <h3>{recipe.title}</h3>
          <p>{recipe.cookingTime} to make.</p>

          <div className="">{recipe.method.substring(0, 100)} ...</div>
          <Link to={`/recipe/${recipe.id}`}>Cook This</Link>
          <img
            onClick={() => handleClick(recipe.id)}
            className="delete"
            src={TrashIcon}
            alt=""
          />
        </div>
      ))}
    </div>
  )
}

export default RecipeList
