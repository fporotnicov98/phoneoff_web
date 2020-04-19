import {combineReducers,createStore} from "redux"
import goodsReducer from './goodsReducer'



let redusers = combineReducers({
    catalogPage: goodsReducer,
})

let store = createStore(redusers);

export default store;