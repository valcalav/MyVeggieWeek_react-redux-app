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