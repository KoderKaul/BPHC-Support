import { FETCH_ALL_COURIERS, POST_COURIER } from "../courierTypes";

const initialState = {
  couriers: [],
};

export const courierReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_ALL_COURIERS:
      return {
        ...state,
        couriers: action.payload,
      };

    case POST_COURIER:
      return {
        ...state,
        couriers: [...state.couriers, action.payload],
      };
    default:
      return state;
  }
};
