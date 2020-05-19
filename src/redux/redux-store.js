import {combineReducers,createStore,applyMiddleware} from "redux"
import goodsReducer from './goodsReducer'
import thunkMiddleware from 'redux-thunk'



let redusers = combineReducers({
    catalogPage: goodsReducer,
})

let store = createStore(redusers,applyMiddleware(thunkMiddleware));

window.store = store;

export default store;