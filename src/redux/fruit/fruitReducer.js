import { BUY_FRUIT } from "./actionType"
const initialState={
    noOfFruits:20
}
export const fruitReducer=(state=initialState,action)=>{
    switch(action.type){
        case BUY_FRUIT:return {
            ...state,
            noOfFruits:state.noOfFruits-1
        }

        default:return state
    }
}