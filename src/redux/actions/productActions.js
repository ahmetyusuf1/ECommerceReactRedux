import axios from "axios";
import { actionTypes } from "../actionTypes";

export const setProducts = (payload) => ({
  type: actionTypes.SET_PRODUCTS,
  payload,
});

export const setLoading = () => ({
  type: actionTypes.SET_LOADING,
});

export const setError = (payload) => ({
  type: actionTypes.SET_ERROR,
  payload,
});

export const getProducts = () => (dispatch) => {
  dispatch(setLoading());
  axios
    .get("http://localhost:3050/products")
    .then((response) => dispatch(setProducts(response.data)))
    .catch((error) => dispatch(setError(error)));
};
