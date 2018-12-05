import * as actionTypes from './actionTypes'
const defaultState = {
    list:[]
}
export default (state=defaultState,action) => {
    const newState = {...state}
    switch(action.type){
        case actionTypes.CHANGE_LIST:
            newState.list = action.data.articleList
            break
        case actionTypes.CHANGE_MORE_LIST:
            newState.list = [...newState.list,...action.data]
            break
    }
    return newState
}