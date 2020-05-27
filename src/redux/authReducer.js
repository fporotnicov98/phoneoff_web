import API from '../API/api'



let initial = {
    email: null,
    isAuth: false,
}
const authReducer = (state = initial, action) => {
    switch (action.type) {
        case "SET_AUTH_DATA":
            return {
                ...state,
                ...action.payload
            }
        default:
            return state;

    }
}

export const setAuthData = (email, isAuth) => ({ type: "SET_AUTH_DATA", payload: {  email, isAuth } })


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