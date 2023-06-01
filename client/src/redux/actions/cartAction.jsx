import axios from "axios";
import * as actionTypes from '../../redux/constants/cartConstants';
const URL='';
export const addToCart=(id, quantity)=> async(dispatch)=>{
try{
const {data}=await axios.get(`${URL}/product/${id}`);
dispatch({type: actionTypes.ADD_TO_CART, payload: {...data, quantity}});

}catch(error){
    dispatch({type: actionTypes.ADD_TO_CART_ERROR, payload: error});
}
}
export const removeToCart=(id)=>(dispatch)=>{

dispatch({type: actionTypes.REMOVE_TO_CART, payload: id});
}