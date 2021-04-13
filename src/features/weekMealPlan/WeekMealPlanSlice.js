const initialState = [];

export const weekMealPlanReducer = (weekMealPlan = initialState, action) => {
    switch (action.type) {
        case 'weekMealPlan/addMondayRecipe':
            let newRecipeMonday = action.payload
            newRecipeMonday.day = 'monday'
            return [...weekMealPlan, newRecipeMonday]

        case 'weekMealPlan/addTuesdayRecipe':
            let newRecipeTuesday = action.payload
            newRecipeTuesday.day = 'tuesday'
            return [...weekMealPlan, newRecipeTuesday]

        case 'weekMealPlan/addWednesdayRecipe':
            let newRecipeWednesday = action.payload
            newRecipeWednesday.day = 'wednesday'
            return [...weekMealPlan, newRecipeWednesday]
        
        case 'weekMealPlan/addThursdayRecipe':
            let newRecipeThursday = action.payload
            newRecipeThursday.day = 'thursday'
            return [...weekMealPlan, newRecipeThursday]

        case 'weekMealPlan/addFridayRecipe':
            let newRecipeFriday = action.payload
            newRecipeFriday.day = 'friday'
            return [...weekMealPlan, newRecipeFriday]

        case 'weekMealPlan/addSaturdayRecipe':
            let newRecipeSaturday = action.payload
            newRecipeSaturday.day = 'saturday'
            return [...weekMealPlan, newRecipeSaturday]

        case 'weekMealPlan/addSundayRecipe':
        let newRecipeSunday = action.payload
        newRecipeSunday.day = 'sunday'
        return [...weekMealPlan, newRecipeSunday]

        default:
            return weekMealPlan;
    }
}

export function addMondayRecipe(recipe) {
    return {
        type: 'weekMealPlan/addMondayRecipe',
        payload: recipe
    }
}

export function addTuesdayRecipe(recipe) {
    return {
        type: 'weekMealPlan/addTuesdayRecipe',
        payload: recipe
    }
}

export function addWednesdayRecipe(recipe) {
    return {
        type: 'weekMealPlan/addWednesdayRecipe',
        payload: recipe
    }
}

export function addThursdayRecipe(recipe) {
    return {
        type: 'weekMealPlan/addThursdayRecipe',
        payload: recipe
    }
}

export function addFridayRecipe(recipe) {
    return {
        type: 'weekMealPlan/addFridayRecipe',
        payload: recipe
    }
}

export function addSaturdayRecipe(recipe) {
    return {
        type: 'weekMealPlan/addSaturdayRecipe',
        payload: recipe
    }
}

export function addSundayRecipe(recipe) {
    return {
        type: 'weekMealPlan/addSundayRecipe',
        payload: recipe
    }
}

export const selectWeekMealPlan = (state) => state.weekMealPlan;
