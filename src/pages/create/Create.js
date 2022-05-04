import { useState, useRef, useEffect } from "react"
import { useHistory } from "react-router-dom"
import { useFetch } from "../../hooks/useFetch"
import "./Create.css"

import React from "react"

const Create = props => {
  const [title, setTitle] = useState("")
  const [method, setMethod] = useState("")
  const [cookingTime, setCookingTime] = useState("")
  const [newIngredient, setNewIngredient] = useState("")
  const [ingredients, setIngredients] = useState([])
  const ingredientInput = useRef(null)
  const history = useHistory()

  const { postData, data, error } = useFetch(
    "http://localhost:3000/recipes",
    "POST"
  )

  const handleSubmit = e => {
    e.preventDefault()

    console.log(title, method, cookingTime, ingredients)

    postData({
      title,
      ingredients,
      method,
      cookingTime: cookingTime + " minutes"
    })
  }

  const handleAdd = e => {
    e.preventDefault()
    const ing = newIngredient.trim()

    if (ing && !ingredients.includes(ing)) {
      setIngredients(prevIngridients => [...prevIngridients, ing])
    }

    setNewIngredient("")
    ingredientInput.current.focus()
  }

  // redirect user
  useEffect(() => {
    if (error) return "there was an error" + error

    if (data) {
      history.push("/")
    }
  }, [data, error, history])

  return (
    <div className="create">
      <h2 className="page-title">Add a New Recipe</h2>
      <form onSubmit={handleSubmit}>
        <label>
          <span>
            <input
              type="text"
              onChange={e => setTitle(e.target.value)}
              value={title}
              required
            />
          </span>
        </label>

        {/* ingredients goes here */}

        <label>
          <span>Recipe ingredients: </span>
          <div className="ingredients">
            <input
              type="text"
              onChange={e => setNewIngredient(e.target.value)}
              value={newIngredient}
              ref={ingredientInput}
            />
            <button onClick={handleAdd} className="btn">
              add
            </button>
          </div>
        </label>

        <p>
          Current ingredients:{" "}
          {ingredients && ingredients.map(i => <em key={i}>{i}, </em>)}
        </p>

        <label>
          <span>Recipe method:</span>
          <textarea
            onChange={e => setMethod(e.target.value)}
            value={method}
            required
          />
        </label>

        <label>
          <span>Cooking time (minutes):</span>
          <input
            type="number"
            onChange={e => setCookingTime(e.target.value)}
            value={cookingTime}
            required
          />
        </label>

        <button className="btn">Submit</button>
      </form>
    </div>
  )
}

export default Create
