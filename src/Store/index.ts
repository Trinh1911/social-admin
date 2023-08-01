// tao ra 1 store
import { combineReducers, applyMiddleware, legacy_createStore as createStore } from "redux"
import thunkMiddleware from "redux-thunk"
import { accountReducer } from "./Account/reducers"
// bang tong hop cac reducer vao store
const rootReducer = combineReducers({
    account: accountReducer
})
// luu rootReducer vao appstate de su dung toan bo ung dung
export type AppState = ReturnType<typeof rootReducer>
export default function comfigureStore() {
    //  su li hanh dong bat dong bo
    const middlewares = [thunkMiddleware]
    //  luu danh sach sau khi da kiem tra
    const middlewareEnhancer = applyMiddleware(...middlewares)
    // tao store gom cac reducer va middlewares
    return createStore(rootReducer, middlewareEnhancer)
}