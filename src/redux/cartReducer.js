import API from '../API/api'

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
        case 'REMOVE_PROD_FROM_CART':
            let index = state.items.findIndex(obj => obj.Id === action.payload);
            let filtered = state.items.filter(obj => obj.Id === action.payload);
            if (index === -1 || filtered.length === 1) {
                return {
                    ...state
                };
            }
            state.items.splice(state.items.findIndex(obj => obj.Id === action.payload), 1);
            return {
                ...state
              };
        default:
            return state;
    }
};

export const addToCart = product => ({ type: 'ADD_TO_CART', payload: product });
export const removeFromCart = id => ({ type: 'REMOVE_FROM_CART', payload: id });
export const removeProdFromCart = id => ({ type: 'REMOVE_PROD_FROM_CART', payload: id });

export const addOrder = (prodId,userId,date,count) => dispatch => {
    API.addOrder(prodId,userId,date,count)
}

export default cartReducer