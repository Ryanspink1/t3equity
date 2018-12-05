import { LOGIN } from "../constants/action-types";
import { ADD_USER_DATA } from "../constants/action-types";
import { CHANGE_LOGIN_BUTTON_STATUS } from "../constants/action-types";
import { ADD_FORM_ERROR } from "../constants/action-types";
import { CLEAR_FORM_ERROR } from "../constants/action-types";

const initialState = {
  loggedIn: false,
  userData: { email: null,
              jwt:   null,
              id:    null },
  loginButtonStatus: false,
  formError: null,
}

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN:
      return { ...state, loggedIn: !state.loggedIn };
    case ADD_USER_DATA:
      return { ...state, userData: {email: action.payload.email, jwt: action.payload.jwt, id: action.payload.id } };
    case CHANGE_LOGIN_BUTTON_STATUS:
      return { ...state, loginButtonStatus: !state.loginButtonStatus };
    case ADD_FORM_ERROR:
      return { ...state, formError: action.payload};
    case CLEAR_FORM_ERROR:
      return { ...state, formError: null};
    default:
      return state;
  }
}

export default rootReducer;
