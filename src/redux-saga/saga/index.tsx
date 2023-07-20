import {takeEvery,all} from 'redux-saga/effects'
import * as ActionRegion from '../constant/regionConstant'
import { handleAddRegion, handleGetRegion } from './regionSaga'
import * as ActionTypeUser from '../constant/userCOnstant'
import { handleSignin, handleSignout, handleSignup } from './UserSaga'
function* watchAll(){
    yield all([
        takeEvery(ActionRegion.GET_DATA_REQ,handleGetRegion),
        takeEvery(ActionRegion.ADD_DATA_REQUEST,handleAddRegion),
        takeEvery(ActionTypeUser.USER_SIGNIN_REQUEST,handleSignin),
        takeEvery(ActionTypeUser.USER_SIGNOUT_REQUEST,handleSignout),
        takeEvery(ActionTypeUser.USER_SIGNUP_REQUEST,handleSignup)
    ])
}

export default watchAll