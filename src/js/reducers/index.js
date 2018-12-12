import { LOGIN } from "../constants/action-types";
import { ADD_USER_DATA } from "../constants/action-types";
import { CHANGE_LOGIN_BUTTON_STATUS } from "../constants/action-types";
import { ADD_FORM_ERROR } from "../constants/action-types";
import { CLEAR_FORM_ERROR } from "../constants/action-types";
import { CHANGE_FRIEND_NAV_HEADER } from "../constants/action-types";
import { CHANGE_FRIEND_OR_REQUEST } from "../constants/action-types";
import { ADD_FRIENDS_AND_REQUESTS } from "../constants/action-types";
import { REMOVE_FRIEND_REQUEST } from "../constants/action-types";
import { ADD_FRIEND } from "../constants/action-types";
import { OPEN_CONVERSATION } from "../constants/action-types";
import { REMOVE_FRIEND } from "../constants/action-types";

const initialState = {
  loggedIn: false,
  userData: { email: null,
              jwt:   null,
              id:    null },
  loginButtonStatus: false,
  formError: null,
  friendNavHeaderStatus:'messages',
  friendOrRequest:'friends',
  friendsAndRequests: {
    friends: [],
    requests: [],
  },
  conversation: {
    id: null,
    recipient_id: null,
    messages: []
  }
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
    case CHANGE_FRIEND_NAV_HEADER:
      return { ...state, friendNavHeaderStatus: action.payload };
    case CHANGE_FRIEND_OR_REQUEST:
      return { ...state, friendOrRequest: action.payload };
    case ADD_FRIENDS_AND_REQUESTS:
      return { ...state, friendsAndRequests: { friends: action.payload.friends, requests: action.payload.friend_requests } };
    case REMOVE_FRIEND_REQUEST:
      return { ...state, friendsAndRequests: { friends: state.friendsAndRequests.friends, requests: state.friendsAndRequests.requests.filter(request => request != action.payload) } };
    case ADD_FRIEND:
      return { ...state, friendsAndRequests: { friends: state.friendsAndRequests.friends.concat(action.payload), requests: state.friendsAndRequests.requests } };
    case OPEN_CONVERSATION:
      return { ...state, conversation: { id: action.payload.id, recipient_id: action.payload.recipient_id } };
    case REMOVE_FRIEND:
      return { ...state, friendsAndRequests: { friends: state.friendsAndRequests.friends.filter(request => request != action.payload), recipient_id: state.friendsAndRequests.requests} };
    default:
      return state;
  }
}

export default rootReducer;
