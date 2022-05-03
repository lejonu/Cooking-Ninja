import { BrowserRouter, Switch, Route } from "react-router-dom"

// Page Components
import Home from "./pages/home/Home"
import Create from "./pages/create/Create"
import Search from "./pages/search/Search"
import Recipes from "./pages/recipe/Recipes"

// Styles
import "./App.css"

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/create">
            <Create />
          </Route>
          <Route exact path="/search">
            <Search />
          </Route>
          <Route exact path="/recipes/:id">
            <Recipes />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  )
}

export default App
