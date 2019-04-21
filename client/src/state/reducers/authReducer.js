import {
  GET_CURRENT_USER,
  REGISTER_USER,
  GET_ERRORS,
  SET_CURRENT_USER
} from "../actions/types";

const initialState = {
  isAuthenticated: false,
  user: {}
};

export default function(state = initialState, action) {
  switch (action.type) {
    case REGISTER_USER:
      return {
        ...state,
        user: action.payload
      };
    default:
      return state;
  }
}