const initialState= ''

export const searchRecipeReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'searchRecipe/setSearchRecipe':
            return action.payload;
        case 'searchRecipe/clearSearchRecipe':
            return '';
        default:
            return state;
    }
}

export function setSearchRecipe(text) {
    return {
        type: 'searchRecipe/setSearchRecipe',
        payload: text
    }
}

export function clearSearchRecipe() {
    return {
        type: 'searchRecipe/clearSearchRecipe'
    }
}

export const selectSearchRecipe = (state) => state.searchRecipe;
