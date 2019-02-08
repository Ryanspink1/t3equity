import { CHANGE_ACTIVE } from "../constants/action-types";
import { LOGIN } from "../constants/action-types";
import { ADD_USER_DATA } from "../constants/action-types";

export const changeActive = activeItem => ({ type: CHANGE_ACTIVE, payload: activeItem });
export const login = loggedIn => ({ type: LOGIN, payload: loggedIn });
export const addUserData = userData => ({ type: ADD_USER_DATA, payload: userData });
