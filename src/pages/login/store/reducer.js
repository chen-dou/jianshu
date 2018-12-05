import * as actionTypes from './actionTypes'
const defaultState = {
    loginStatus:false
}
export default (state=defaultState,action) => {
    const newState = {...state}
    switch(action.type){
        case actionTypes.CHANGE_LOGIN:
            newState.loginStatus = action.loginStatus
            break
        case actionTypes.LOGOUT:
            newState.loginStatus = false
            break
    }
    return newState
}