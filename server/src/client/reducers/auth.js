import { FETCH_CURRENT_USER } from "../actions";

function authReducer (state = null, action) {
  switch(action.type) {
    case FETCH_CURRENT_USER: {
      return action.payload.data || null;
    }
    default: {
      return state;
    }
  }
};

export default authReducer;