import * as ActionType from "../constant/regionConstant";

const INIT_STATE = {
  regions: [],
};

const RegionReducer = (state = INIT_STATE, action: any) => {
  switch (action.type) {
    case ActionType.GET_DATA_REQ:
      return { ...state };
    case ActionType.GET_DATA_OK:
      return GetRegion(state, action);
    case ActionType.ADD_DATA_REQUEST:
      return { ...state };
    case ActionType.ADD_DATA_SUCCESS:
      return AddRegion(state, action);
    default:
      return { ...state };
  }
};

const GetRegion = (state: any, action: any) => {
  return {
    ...state,
    regions: action.payload,
  };
};

const AddRegion = (state:any, action:any) => {
    const {payload} = action
    return {
        ...state,
        regions:[...state.regions,payload]
    }
}

export default RegionReducer;
