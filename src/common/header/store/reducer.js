import * as actionTypes from './actionTypes'
const defaultState = {
    focused: false,
    list:[],
    page:1,
    mouseIn:false
}
export default (state=defaultState,action) => {
    const newState = {...state}
    switch(action.type){
        case actionTypes.SEARCH_FOCUS:
            newState.focused = true
            break
        case actionTypes.SEARCH_BLUR:
            newState.focused = false
            break
        case actionTypes.CHANGE_LIST:
            newState.list = action.data
            break
        case actionTypes.MOUSE_ENTER:
            newState.mouseIn = true
            break
        case actionTypes.MOUSE_LEAVE:
            newState.mouseIn = false
            break
        case actionTypes.CHANGE_PAGE:
            newState.page = action.page
            break
        default:
            return newState    
    }
    return newState
}