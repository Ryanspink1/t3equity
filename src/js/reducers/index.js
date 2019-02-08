import { CHANGE_ACTIVE } from "../constants/action-types";
import { LOGIN } from "../constants/action-types";
import { ADD_USER_DATA } from "../constants/action-types";
import { CHANGE_LOGIN_BUTTON_STATUS } from "../constants/action-types";
import { ADD_FORM_ERROR } from "../constants/action-types";
import { CLEAR_FORM_ERROR } from "../constants/action-types";
import { CHANGE_ADMIN_VIEW } from "../constants/action-types";
import { ADD_NEWSLETTERS } from "../constants/action-types";



const initialState = {
  activeItem: 'Home',
  loggedIn: false,
  formError: null,
  adminView: 'newsletters',
  newsletters: [],
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
    case ADD_FORM_ERROR:
      return { ...state, formError: action.payload};
    case CLEAR_FORM_ERROR:
      return { ...state, formError: null};
    case CHANGE_ADMIN_VIEW:
      return { ...state, adminView: action.payload};
    case ADD_NEWSLETTERS:
      return { ...state, newsletters: state.newsletters.concat([action.payload])};
    default:
      return state;
  }
}

export default rootReducer;
