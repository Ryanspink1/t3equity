import { CHANGE_ACTIVE } from "../constants/action-types";


const initialState = {
  activeItem: 'Home'
}

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_ACTIVE:
    return { ...state, activeItem: action.payload };
    default:
      return state;
  }
}

export default rootReducer;
