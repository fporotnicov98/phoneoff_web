import API from '../API/api'

const UPDATE_NEW_TITLE = "UPDATE_NEW_TITLE";
const FILTER_NEW_TITLE = "FILTER_NEW_TITLE";
const SET_PHONES = "SET_PHONES"

let initial = {
    filterPhones: "",
    phones:[]
}

const goodsReducer = (state = initial, action) => {
    
    switch (action.type) {
        case "SET_PHONES":
            debugger
            return {
                ...state,
                phones: action.phones
            }
        case "UPDATE_NEW_TITLE":
            state.filterPhones = action.getTitle;
            return {
                ...state,
                phones: state.phones.filter(prod => prod.title.toLowerCase().startsWith(state.filterPhones))  
            }
        default:
            return state;
    }
}



export const updateNewTitleAC = (title) => ({ type: UPDATE_NEW_TITLE, getTitle:title })
export const filterNewTitleAC = () => ({ type: FILTER_NEW_TITLE})
export const setPhones = (phones) => ({type: SET_PHONES, phones})

export const getPhones = () => dispatch => {
    debugger
    API.getPhones()
        .then(response => {
            debugger
            dispatch(setPhones(response.data))
        })
}

export default goodsReducer