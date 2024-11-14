import { ActionTypes } from "../contants/action-types";

const initialState = {
  products: [],
};

export const productReducer = (state = initialState, action) => {
  switch (action.type) { // Corrected: Access action.type
    case ActionTypes.SET_PRODUCTS:
      return {
        ...state,
        products: action.payload, // Update the products state with the payload
      };

    default:
      return state;
  }
};
