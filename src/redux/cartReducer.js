const init = {
    items: []
};

const cartReducer = (state = init, action) => {
    switch (action.type) {
        case "ADD_TO_CART":
            return {
                state,
                items: [...state.items, action.payload]
            };
        case "REMOVE_FROM_CART":
            return {
                ...state,
                items: state.items.filter(o => o.Id !== action.payload)
            };
        default:
            return state;
    }
};

export const addToCart = product => ({ type: 'ADD_TO_CART', payload: product });
export const removeFromCart = id => ({ type: 'REMOVE_FROM_CART', payload: id });

export default cartReducer