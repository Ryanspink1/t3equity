import { CHANGE_ACTIVE } from "../constants/action-types";
import { LOGIN } from "../constants/action-types";
import { ADD_USER_DATA } from "../constants/action-types";



const initialState = {
  activeItem: 'Home',
  loggedIn: false,
  userData: { email: null,
              jwt:   null,
              id:    null },
}

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_ACTIVE:
      return { ...state, activeItem: action.payload };
    case LOGIN:
      return { ...state, loggedIn: !state.loggedIn};
    case ADD_USER_DATA:
      return { ...state, userData: {email: action.payload.email, jwt: action.payload.jwt, id: action.payload.id } };
    default:
      return state;
  }
}

export default rootReducer;
