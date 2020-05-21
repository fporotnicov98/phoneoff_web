import {combineReducers,createStore,applyMiddleware} from "redux"
import goodsReducer from './goodsReducer'
import filterReducer from "./filterReducer";
import thunkMiddleware from 'redux-thunk'
import productReducer from './productReducer'



let redusers = combineReducers({
    catalogPage: goodsReducer,
    productPage: productReducer,
    filter: filterReducer
})

let store = createStore(redusers,applyMiddleware(thunkMiddleware));

window.store = store;

export default store;