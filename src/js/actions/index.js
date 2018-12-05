import { LOGIN } from "../constants/action-types";
import { ADD_USER_DATA } from "../constants/action-types";
import { CHANGE_LOGIN_BUTTON_STATUS } from "../constants/action-types";
import { ADD_FORM_ERROR } from "../constants/action-types";
import { CLEAR_FORM_ERROR } from "../constants/action-types";

export const login = loggedIn => ({ type: LOGIN, payload: loggedIn});
export const addUserData  = userData => ({ type: ADD_USER_DATA, payload: userData});
export const changeLoginButtonStatus  = loginButtonStatus => ({ type: CHANGE_LOGIN_BUTTON_STATUS, payload: loginButtonStatus});
export const addFormError = formError => ({ type: ADD_FORM_ERROR, payload: formError });
export const clearFormError = formError => ({ type: CLEAR_FORM_ERROR, payload: formError });
