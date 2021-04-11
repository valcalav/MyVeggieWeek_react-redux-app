import { createStore, combineReducers } from 'redux'

import { allRecipesReducer } from '../features/allRecipes/AllRecipesSlice'
import { searchRecipeTermReducer } from '../features/searchRecipeTerm/SearchRecipeTermSlice'


export const store = createStore(combineReducers({
    allRecipes: allRecipesReducer,
    searchRecipeTerm: searchRecipeTermReducer,
}))