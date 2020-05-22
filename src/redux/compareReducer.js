const init = {
    items:[]
}

const compareReducer = (state = init, action) => {
    switch (action.type) {
        case "ADD_TO_COMPARE":
            return {
                state,
                items: [...state.items, action.payload]
            };
        case "REMOVE_FROM_COMPARE":
            return {
                ...state,
                items: state.items.filter(o => o.Id !== action.payload)
            };
        default:
            return state;
    }
}

export const addToCompare = product => ({ type: 'ADD_TO_COMPARE', payload: product });
export const removeFromCompare = id => ({ type: 'REMOVE_FROM_COMPARE', payload: id });

export default compareReducer