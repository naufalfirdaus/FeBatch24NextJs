import * as ActionRegion from '../constant/regionConstant'

export const GetRegionReq = (payload : any) =>({
    type:ActionRegion.GET_DATA_REQ,
    payload
})

export const GetRegionSuccess = (payload : any) => ({
    type: ActionRegion.GET_DATA_OK,
    payload
})

export const GetRegionFail = (payload: any) => ({
    type: ActionRegion.GET_DATA_FAIL,
    payload
})

export const AddRegionRequest = (payload: any) => ({
    type: ActionRegion.ADD_DATA_REQUEST,
    payload
})

export const AddRegionSuccess = (payload: any) => ({
    type: ActionRegion.ADD_DATA_SUCCESS,
    payload
})

export const AddRegionFailed = (payload: any) => ({
    type: ActionRegion.ADD_DATA_FAILED,
    payload
})