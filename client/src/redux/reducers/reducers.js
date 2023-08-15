import { GET_PRODUCT } from "../actionType/actionType"
const initialState={
    product:[]
}
 const rootReducer = (state = initialState, {type,payload}) => {
    switch (type) {
        case GET_PRODUCT:
            return {...state,product:payload}
        default:
            return state
    }
}
export default rootReducer