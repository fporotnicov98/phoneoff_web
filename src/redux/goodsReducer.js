import API from '../API/api'


let initial = {
    filterPhones: "",
    phones:[]
}

const goodsReducer = (state = initial, action) => {
    
    switch (action.type) {
        case "SET_PHONES":
            return {
                ...state,
                phones: action.payload
            }
        default:
            return state;
    }
}




export const setPhones = (phones) => ({type: "SET_PHONES", payload: phones})

export const getPhones = () => dispatch => {
    API.getPhones()
        .then(response => {
            dispatch(setPhones(response.data))
        })
}

export default goodsReducer