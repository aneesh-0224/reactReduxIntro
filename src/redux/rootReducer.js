
import {cakeReducer} from './cake/cakeReducer'
import {fruitReducer} from './fruit/fruitReducer'
import { combineReducers } from 'redux'
export const rootReducer= combineReducers({
    cake:cakeReducer,
    fruit:fruitReducer
})