import {combineReducers,createStore,applyMiddleware} from "redux"
import goodsReducer from './goodsReducer'
import filterReducer from "./filterReducer";
import thunkMiddleware from 'redux-thunk'
import productReducer from './productReducer'
import cartReducer from "./cartReducer";
import compareReducer from './compareReducer'
import authReducer from "./authReducer";




let redusers = combineReducers({
    catalogPage: goodsReducer,
    productPage: productReducer,
    filter: filterReducer,
    cart: cartReducer,
    comparePage: compareReducer,
    auth:authReducer,
})

let store = createStore(redusers,applyMiddleware(thunkMiddleware));

window.store = store;

export default store;