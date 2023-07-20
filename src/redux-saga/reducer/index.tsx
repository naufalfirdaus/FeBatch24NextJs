import {combineReducers} from 'redux'
import RegionReducer from './regionReducer'
import UserReducer from './userReducer'

const rootReducer = combineReducers({
    regionState : RegionReducer,
    userState: UserReducer
})

export default rootReducer