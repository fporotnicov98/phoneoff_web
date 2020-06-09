import API from '../API/api'




let initial = {
    email: null,
    isAuth: false,
    token: null,
    fio:null,
    address:null,
    phoneNumber: null,
    login:null,
    orders:[]
}
const authReducer = (state = initial, action) => {
    switch (action.type) {
        case "SET_AUTH_DATA":
            return {
                ...state,
                ...action.payload
            }
        case "SET_TOKEN":
            return{
                ...state,
                token: action.payload
            }
            case "SET_ORDERS":
                return {
                    ...state,
                    orders: action.payload
                }
        default:
            return state;

    }
}

export const setAuthData = (email, isAuth, fio, address,phoneNumber,login) => ({ type: "SET_AUTH_DATA", payload: { email, isAuth, fio, address,phoneNumber,login } })
export const setToken = (token) => ({ type: "SET_TOKEN", payload: token })
export const setOrders= (orders) => ({ type: "SET_ORDERS", payload: orders })

export const getAuth = (token) => (dispatch) => {
    API.getAuth(token)
        .then(response => {
            if (response.data.resultCode === 0) {
                dispatch(setAuthData(response.data.email, true,response.data.fio,response.data.address,response.data.phoneNumber,response.data.login))
            }
        })
}
export const getOrder = (token) => (dispatch) => {
    API.getOrder(token)
        .then(response => {
            dispatch(setOrders(response.data))
        })
}
export const setLogin = (email, password) => dispatch => {
    API.login(email, password)
        .then(response => {
            if (response.data.username) {
                dispatch(setToken(response.data.access_token))
                dispatch(getAuth(response.data.access_token))
            }
        })
}
export const setRegistration = (email, login, password, fio, address, phoneNumber) => dispatch => {
    API.sendMail(email, login, password, fio, address, phoneNumber)
}
export const getCode = (code) => dispatch => {
    API.getCode(code)
        .then(response => {
            alert("Регистрация прошла успешно!")
        })
        .catch(err => {
        })
}
export const logout = () => dispatch => {
    dispatch(setAuthData(null, false))
}
export default authReducer