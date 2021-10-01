import { combineReducers } from "redux";
import cartReducer from "./reducers/cartReduicer";


const rootReducer = combineReducers({
    cart: cartReducer
})

export default rootReducer;