import API from '../API/api'

const SET_PRODUCT = "SET_PRODUCT"

let initial = {
    product: null
}

const productReducer = (state = initial, action) => {
      
    switch (action.type) {
        case "SET_PRODUCT":
            return {
                ...state,
                product: action.product
            }
        default:
            return state;
    }
}


export const setProduct = (product) => ({type: SET_PRODUCT, product})

export const getProduct = (productId) => (dispatch) => {
    API.getProduct(productId)
        .then(response => {
            dispatch(setProduct(response.data))
        })
}

export default productReducer