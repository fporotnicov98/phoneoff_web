import {combineReducers,createStore,applyMiddleware} from "redux"
import goodsReducer from './goodsReducer'
import thunkMiddleware from 'redux-thunk'
import productReducer from './productReducer'



let redusers = combineReducers({
    catalogPage: goodsReducer,
    productPage: productReducer,
})

let store = createStore(redusers,applyMiddleware(thunkMiddleware));

window.store = store;

export default store;