import { CHANGE_ACTIVE } from "../constants/action-types";
import { LOGIN } from "../constants/action-types";
import { ADD_USER_DATA } from "../constants/action-types";
import { ADD_FORM_ERROR } from "../constants/action-types";
import { CLEAR_FORM_ERROR } from "../constants/action-types";
import { CHANGE_ADMIN_VIEW } from "../constants/action-types";
import { ADD_NEWSLETTERS } from "../constants/action-types";
import { REMOVE_NEWSLETTERS } from "../constants/action-types";

export const addFormError = formError => ({ type: ADD_FORM_ERROR, payload: formError });
export const clearFormError = formError => ({ type: CLEAR_FORM_ERROR, payload: formError });
export const changeActive = activeItem => ({ type: CHANGE_ACTIVE, payload: activeItem });
export const login = loggedIn => ({ type: LOGIN, payload: loggedIn });
export const addUserData = userData => ({ type: ADD_USER_DATA, payload: userData });
export const changeAdminView = adminView => ({ type: CHANGE_ADMIN_VIEW, payload: adminView });
export const addNewsletters = newsletters=> ({ type: ADD_NEWSLETTERS, payload: newsletters});
export const removeNewsletters = newsletters=> ({ type: REMOVE_NEWSLETTERS, payload: newsletters});
