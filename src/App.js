import './App.css';

import AllRecipes from './features/allRecipes/AllRecipes'
import SearchRecipe from './features/searchRecipe/SearchRecipe'

function App() {
  return (
    <div className="App">
      <SearchRecipe />
      <AllRecipes />
    </div>
  );
}

export default App;
