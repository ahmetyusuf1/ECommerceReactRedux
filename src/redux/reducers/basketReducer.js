import { actionTypes } from "../actionTypes";

const initialState = {
  basket: [],
  isLoading: false,
  isError: false,
};

const basketReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SET_BASKET_LOADING:
      return { ...state, isLoading: true };
    case actionTypes.SET_BASKET_ERROR:
      return { ...state, isLoading: false, isError: action.payload };
    case actionTypes.SET_BASKET:
      return {
        ...state,
        isLoading: false,
        isError: false,
        basket: action.payload,
      };
    case actionTypes.ADD_TO_BASKET:
      console.log(action.payload);
      return { ...state, basket: state.basket.concat(action.payload) };
    case actionTypes.UPDATE_ITEM:
      const newBasket = state.basket.map((item) =>
        item.id === action.payload ? { ...item, amount: item.amount + 1 } : item
      );

      return { ...state, basket: newBasket };
    case actionTypes.REMOVE_FROM_BASKET:
      const filteredBasket = state.basket.filter(
        (item) => item.id !== action.payload
      );
      return { ...state, basket: filteredBasket };
    default:
      return state;
  }
};

export default basketReducer;
