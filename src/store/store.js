import { createStore, combineReducers } from 'redux'

import { allRecipesReducer } from '../features/allRecipes/AllRecipesSlice'
import { searchRecipeReducer } from '../features/searchRecipe/SearchRecipeSlice'


export const store = createStore(combineReducers({
    allRecipes: allRecipesReducer,
    searchRecipe: searchRecipeReducer,
}))