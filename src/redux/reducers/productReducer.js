import { ActionTypes } from "../contants/action-types";

const initialState = {
  products: [{
    id:1,
    title:"Dispash",
    category:"programmer"
  }],
};

export const productReducer = (state, { action, payload }) => {
  switch (type) {
    case ActionTypes.SET_PRODUCT:
      return state;

    default:
      return state;
  }
};
