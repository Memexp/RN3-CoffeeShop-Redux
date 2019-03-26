import * as actionTypes from "../actions/types";

const initialState = {
  coffeeShops: [],
  loading: true,
  username: "Memexp",
  image_url:
    "https://lh3.googleusercontent.com/-tU_22qJMv2c/WwNLuSUTIgI/AAAAAAAAAhc/59IE4ycisB0PVpnHLt5chM0pzBQPmYSlwCEwYBhgL/w278-h280-p/6b5e88c3-a3ca-4d40-b983-bb16e692c1aa"
};

const coffeeReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.GET_COFFEESHOPS:
      return {
        ...state,
        coffeeShops: action.payload,
        loading: false
      };
    case actionTypes.COFFEESHOPS_LOADING:
      return {
        ...state,
        loading: true
      };
    default:
      return state;
  }
};

export default coffeeReducer;
