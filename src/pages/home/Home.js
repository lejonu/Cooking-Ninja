import { projectFirestore } from "../../firebase/config"
import { useEffect, useState } from "react"

import "./Home.css"

// componets
import RecipeList from "../../components/RecipeList"

const Home = () => {
  const [data, setData] = useState(null)
  const [isPending, setIsPending] = useState(false)
  const [error, setError] = useState(false)

  useEffect(() => {
    setIsPending(true)

    const unsub = projectFirestore.collection("recipes").onSnapshot(
      snapshot => {
        console.log(snapshot)

        if (snapshot.empty) {
          setError("No recipes to load")
          isPending(false)
        } else {
          let results = []

          snapshot.docs.forEach(doc => {
            results.push({ id: doc.id, ...doc.data() })
          })

          setData(results)
          setIsPending(false)
        }
      },
      err => {
        setError(err.message)
        setIsPending(false)
      }
    )

    return () => unsub()
    // eslint-disable-next-line
  }, [])

  return (
    <div className="home">
      {error && <p className="error">{error}</p>}
      {isPending && <p className="loading">Loading...</p>}
      {data && <RecipeList recipe={data} />}
    </div>
  )
}

export default Home
