import {combineReducers} from 'redux';
import reducer from './counter';
import update from './update'
import {routerReducer} from 'react-router-redux' // 将routerReducer一起和普通reducer进行合并操作

export default combineReducers({
    update,
    reducer,
    routing: routerReducer
})