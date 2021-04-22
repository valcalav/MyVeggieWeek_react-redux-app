import { createStore, combineReducers } from 'redux'

import { allRecipesReducer } from '../features/allRecipes/AllRecipesSlice'
import { searchRecipeReducer } from '../features/searchRecipe/SearchRecipeSlice'
import { weekMealPlanReducer } from '../features/weekMealPlan/WeekMealPlanSlice'
import { detailsViewReducer } from '../features/DetailsViewSlice'


export const store = createStore(combineReducers({
    allRecipes: allRecipesReducer,
    searchRecipe: searchRecipeReducer,
    weekMealPlan: weekMealPlanReducer,
    detailsView: detailsViewReducer
}))
