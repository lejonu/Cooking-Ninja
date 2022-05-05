import "./Recipe.css"
// import { useEffect } from "react"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { projectFirestore } from "../../firebase/config"

const Recipes = props => {
  const { id } = useParams()

  const [recipe, setRecipe] = useState(null)
  const [isPending, setIsPending] = useState(false)
  const [error, setError] = useState(false)

  useEffect(() => {
    setIsPending(true)

    const unsub = projectFirestore
      .collection("recipes")
      .doc(id)
      .onSnapshot(doc => {
        // console.log(doc)
        if (doc.exists) {
          setIsPending(false)
          setRecipe(doc.data())
        } else {
          setIsPending(false)
          setError("Could not find that recipe")
        }
      })

    return () => unsub()
  }, [id])

  const handleClick = () => {
    projectFirestore.collection("recipes").doc(id).update({
      title: "Something completely different"
    })
  }

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
        <button onClick={handleClick}>Update me</button>
      </>
    </div>
  )
}

export default Recipes
