import {
  PRODUCT_LIST_REQUEST,
  PRODUCT_LIST_SUCCESS,
  PRODUCT_LIST_FAIL,
  PRODUCT_DETAILS_REQUEST,
  PRODUCT_DETAILS_SUCCESS,
  PRODUCT_DETAILS_FAIL,
  PRODUCT_SAVE_REQUEST,
  PRODUCT_SAVE_SUCCESS,
  PRODUCT_SAVE_FAIL,
  PRODUCT_DELETE_SUCCESS,
  PRODUCT_DELETE_FAIL,
  PRODUCT_DELETE_REQUEST,
  PRODUCT_REVIEW_SAVE_REQUEST,
  PRODUCT_REVIEW_SAVE_FAIL,
  PRODUCT_REVIEW_SAVE_SUCCESS,
} from '../constants/productConstants';
import axios from 'axios';
import { API_URL } from "../utils/config";

const listProducts = (
  searchKeyword = '',
  sortOrder = '',
) => async (dispatch) => {

  try {
   
    dispatch({ type: PRODUCT_LIST_REQUEST });
    const { data } = await axios.get(`${API_URL}/api/products`);
   
    if (searchKeyword.length > 1) {
      dispatch({ type: PRODUCT_LIST_SUCCESS, payload: data, List: 'SearchPage List' });
    }
    else {
      dispatch({ type: PRODUCT_LIST_SUCCESS, payload: data, List: "HomePage List" });
    }

  } catch (error) {
    dispatch({ type: PRODUCT_LIST_FAIL, payload: error.message });
  }
};

const detailsProduct = (pid) => async (dispatch) => {
   

  try {
// console.log(pid)
    dispatch({ type: PRODUCT_DETAILS_REQUEST, payload: pid });
    const { data } = await axios.get(`${API_URL}/api/products/${pid}`);
    // console.log(data)
    dispatch({ type: PRODUCT_DETAILS_SUCCESS, payload: data });
  } catch (error) {
    console.log(error);
    dispatch({ type: PRODUCT_DETAILS_FAIL, payload: error.message });
  }
};


export {
  listProducts,
  detailsProduct
}
