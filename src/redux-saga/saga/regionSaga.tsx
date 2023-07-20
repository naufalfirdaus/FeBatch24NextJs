import {call,put} from 'redux-saga/effects'
import region from '@/pages/api/region'
import { AddRegionFailed, AddRegionSuccess, GetRegionFail, GetRegionSuccess } from '../action/regionAction'

function* handleGetRegion(action:any):any {
    const { payload } = action
    try {
        const result = yield call(region.GetData,payload)        
        yield put(GetRegionSuccess(result.data))
    } catch (error) {
        yield put(GetRegionFail(error))
    }
}

function* handleAddRegion(action: any): any {
    const { payload } = action
    try {
        const result = yield call(region.upload, payload)
        yield put(AddRegionSuccess(result.data))
    } catch (error) {
        yield put(AddRegionFailed(error))

    }
}

export {
    handleGetRegion,
    handleAddRegion
}