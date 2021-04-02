import { FETCH_ALL_NOTICES, POST_NOTICE } from "../noticeTypes";

const initialState = {
  notices: [],
};

export const noticeReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_ALL_NOTICES:
      return {
        ...state,
        notices: action.payload,
      };
    
      case POST_NOTICE:
        return {
            ...state,
            notices: [...state.notices, action.payload]
          };
    default:
      return state;
  }
};
