import * as ActionType from "../constant/userCOnstant";
import { getCookie } from "cookies-next";

const getFromCookies = (key: any) => {
  if (!key || typeof window === "undefined") {
    return "";
  }
  return getCookie(key);
};

const INIT_STATE = {
  UserProfile: getFromCookies("profile")
    ? JSON.parse(getCookie("profile"))
    : null,
  UserSignup: null,
};

const UserReducer = (state = INIT_STATE, action: any) => {
  switch (action.type) {
    case ActionType.USER_SIGNIN_REQUEST:
      return state;
    case ActionType.USER_SIGNIN_SUCCESS:
      return UserSignin(state, action);
    case ActionType.USER_SIGNUP_REQUEST:
      return state;
    case ActionType.USER_SIGNUP_SUCCESS:
      return UserSignup(state, action);
    case ActionType.USER_SIGNOUT_REQUEST:
      return state;
    case ActionType.USER_SIGNOUT_SUCCESS:
      return UserSignout(state, action);
    default:
      return state;
  }
};

const UserSignin = (state: any, action: any) => {
  return {
    ...state,
    UserProfile: action.payload,
  };
};

const UserSignout = (state: any, action: any) => {
  return {
    ...state,
    UserProfile: null,
    UserSignup: null,
  };
};

const UserSignup = (state: any, action: any) => {
  return {
    ...state,
    UserSignup: action.payload,
  };
};

export default UserReducer;
