import API from '../API/api'

let initial = {
    product: null
}

const productReducer = (state = initial, action) => {
    switch (action.type) {
        case "SET_PRODUCT":
            return {
                ...state,
                product: action.payload
            }
        default:
            return state;
    }
}


export const setProduct = (product) => ({type: "SET_PRODUCT", payload: product})

export const getProduct = (productId) => (dispatch) => {
    API.getProduct(productId)
        .then(response => {
            dispatch(setProduct(response.data))
        })
}

export default productReducer