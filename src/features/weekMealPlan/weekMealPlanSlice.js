const initialState = {
    monday: [],
    tuesday: [],
    wednesday: [],
    thursday: [],
    friday: [],
    saturday: [],
    sunday: []
};

export const weekMealPlanReducer = (weekMealPlan = initialState, action) => {
    switch (action.type) {
        case 'weekMealPlan/addMondayRecipe':
            return [...weekMealPlan, { monday: action.payload }]
        case 'weekMealPlan/addTuesdayRecipe':
            return [...weekMealPlan, { tuesday: action.payload }]
        case 'weekMealPlan/addWednesdayRecipe':
            return [...weekMealPlan, { wednesday: action.payload }]
        case 'weekMealPlan/addThursdayRecipe':
            return [...weekMealPlan, { thursday: action.payload }]
        case 'weekMealPlan/addFridayRecipe':
            return [...weekMealPlan, { friday: action.payload }]
        case 'weekMealPlan/addSaturdayRecipe':
            return [...weekMealPlan, { saturday: action.payload }]
        case 'weekMealPlan/addSundayRecipe':
            return [...weekMealPlan, { sunday: action.payload }]
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
