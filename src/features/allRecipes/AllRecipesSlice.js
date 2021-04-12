import { createSlice } from '@reduxjs/toolkit'

import recipesData from '../../recipes.json'

import { selectSearchRecipe } from '../searchRecipe/SearchRecipeSlice'

export const loadData = () => {
    return {
        type: 'allRecipes/loadData',
        payload: recipesData
    }
}

const initialState = [];
export const allRecipesReducer = (allRecipes = initialState, action) => {
    switch (action.type) {
        case 'allRecipes/loadData':
            return action.payload;
        default:
            return allRecipes;
    }
}

// const options = {
//     name: 'allRecipes',
//     initialState: [],
//     reducers: {
//         loadData: (action) => {
//             return action.payload
//         }
//     }
// }

// const allRecipesSlice = createSlice(options)
export const selectAllRecipes = (state) => state.allRecipes;

export const selectFilteredAllRecipes = (state) => {
    let allRecipes = selectAllRecipes(state)
    let searchRecipe = selectSearchRecipe(state)

    console.log('este log sirve2', searchRecipe)

    return allRecipes.filter((recipe) => recipe.name.toLowerCase().includes(searchRecipe.toLowerCase()))


}


