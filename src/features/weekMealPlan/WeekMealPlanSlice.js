import { createSlice } from '@reduxjs/toolkit'

export const weekMealPlanSlice = createSlice({
    name: 'weekMealPlan',
    initialState: [],
    reducers: {
        addMondayRecipe: (state, action) => {
            let newRecipeMonday = action.payload
            return [...state, newRecipeMonday]
        },
        addTuesdayRecipe: (state, action) => {
            let newRecipeTuesday = action.payload
            return [...state, newRecipeTuesday]
        },
        addWednesdayRecipe: (state, action) => {
            let newRecipeWednesday = action.payload
            return [...state, newRecipeWednesday]
        },
        addThursdayRecipe: (state, action) => {
            let newRecipeThursday = action.payload
            return [...state, newRecipeThursday]
        },
        addFridayRecipe: (state, action) => {
            let newRecipeFriday = action.payload
            return [...state, newRecipeFriday]
        },
        addSaturdayRecipe: (state, action) => {
            let newRecipeSaturday = action.payload
            return [...state, newRecipeSaturday]
        },
        addSundayRecipe: (state, action) => {
            let newRecipeSunday = action.payload
            return [...state, newRecipeSunday]
        }
        }
})


export const weekMealPlanReducer = weekMealPlanSlice.reducer;

export const { addMondayRecipe, addTuesdayRecipe, addWednesdayRecipe, addThursdayRecipe, addFridayRecipe,  addSaturdayRecipe, addSundayRecipe } = weekMealPlanSlice.actions


export const selectWeekMealPlan = (state) => state.weekMealPlan;
