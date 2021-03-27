import { FETCH_ALL } from "../problemTypes";

const initialState = {
  problems: [],
};

export const problemReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_ALL:
      return {
        ...state,
        problems: action.payload,
      };
    default:
      return state;
  }
};
