import { combineReducers, createStore,  } from "redux";
import { companysReducer } from "./CompanyAppState";
import { couponsReducer } from "./CouponAppState";
import {  customersReducer,  } from "./CustomerAppState";
import { loginReducer } from "./UserAppState";



const reducers = combineReducers({loginReducer:loginReducer,customersReducer:customersReducer ,companysReducer:companysReducer,couponsReducer:couponsReducer});
const store = createStore(reducers)



export default store;