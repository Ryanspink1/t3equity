import { CHANGE_ACTIVE } from "../constants/action-types";

export const changeActive = activeItem => ({ type: CHANGE_ACTIVE, payload: activeItem });
