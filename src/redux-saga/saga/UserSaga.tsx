import { call, put } from "redux-saga/effects";
import User from "@/pages/api/User";
import { setCookie, deleteCookie } from "cookies-next";
import {
  UserSigninFailed,
  UserSigninSuccess,
  UserSignoutFailed,
  UserSignoutSuccess,
  UserSignupFailed,
  UserSignupSuccess,
} from "../action/userAction";

function* handleSignin(action: any): any {
  const { payload } = action;
  try {
    const result = yield call(User.signin, payload);
    if (Object.keys(result.data).length === 0) {
      yield put(
        UserSigninFailed({ message: "user or password not match, try again" })
      );
    } else {
      setCookie("access-token", result.data.access_token);
      console.log(result);
      const profile = yield call(User.profile);
      setCookie("profile", JSON.stringify(profile.data));
      console.log(profile.data);
      yield put(UserSigninSuccess(profile.data));
    }
  } catch (error) {
    yield put(UserSigninFailed(error));
  }
}

function* handleSignup(action: any): any {
  const { payload } = action;
  try {
    const result = yield call(User.signup, payload);
    yield put(UserSignupSuccess(result.data));
  } catch (error) {
    yield put(UserSignupFailed(error));
  }
}

function* handleSignout() {
  try {
    deleteCookie("access_token");
    deleteCookie("profile");
    yield put(UserSignoutSuccess({ message: "Success Signout" }));
  } catch (error) {
    yield put(UserSignoutFailed(error));
  }
}

export { handleSignin, handleSignup, handleSignout };
