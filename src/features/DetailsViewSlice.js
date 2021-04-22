const initialState= false

export const detailsViewReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'detailsView/changeDetailsView':
            return action.payload;
        default:
            return state;
    }
}

export function changeDetailsView(value) {
    return {
        type: 'detailsView/changeDetailsView',
        payload: value
    }
}

export const selectDetailsView = (state) => state.detailsView;