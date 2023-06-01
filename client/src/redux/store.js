import {createStore, combineReducers, applyMiddleware} from 'redux';
import { getProductDetailsReducer, getProductReducer } from './reducers/productReducer';
import thunk from 'redux-thunk';
import {composeWithDevTools} from 'redux-devtools-extension';
import cartReducer from './reducers/cartReducer';

const reducer=combineReducers({
    getProducts: getProductReducer,
    getProductDetails: getProductDetailsReducer,
    cart: cartReducer
})
const middleware = [thunk];
const store=createStore(

reducer,

composeWithDevTools(applyMiddleware(...middleware))






);
export default store;  