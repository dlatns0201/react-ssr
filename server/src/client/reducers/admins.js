import { FETCH_ADMINS } from "../actions";

function adminsReducer (state = [], action) {
  switch(action.type) {
    case FETCH_ADMINS: {
      return action.payload.data || null;
    }
    default: {
      return state;
    }
  }
};

export default adminsReducer;