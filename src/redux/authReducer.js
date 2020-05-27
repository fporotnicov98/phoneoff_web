import API from '../API/api'



let initial = {
    email: null,
    isAuth: false,
    token: null,
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
                token : action.payload
            }
        default:
            return state;

    }
}

export const setAuthData = (email, isAuth) => ({ type: "SET_AUTH_DATA", payload: {  email, isAuth } })
export const setToken = (token) => ({type: "SET_TOKEN", payload : token})


export const getAuth = () =>  (dispatch) => {
        API.getAuth()
        .then(response => {
            if (response.data.resultCode === 0) {
                let { email } = response.data;
                dispatch(setAuthData( email, true))
            }
        })
    }
export const setLogin = (email,password) => dispatch => {
    API.login(email,password)
    .then(response => {
        if (response.data.username){
            dispatch(setToken(response.data.access_token))
            dispatch(setAuthData(response.data.username,true))
        }
    })
}
export const setRegistration = (email,login,password,fio,address,phoneNumber) => dispatch => {
    API.addRegData(email,login,password,fio,address,phoneNumber)
}
// export const logout = () => dispatch => {
//     API.logout()
//     .then(response => {
//         if (response.data.resultCode === 0){
//             dispatch(setAuthData(null,false))
//         }
//     })
// }
export default authReducer