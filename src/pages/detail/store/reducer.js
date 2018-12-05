import * as actionTypes from './actionTypes'
const defaultState = {
    title:'',
    content:''
}
export default (state = defaultState,action) => {
    const newState = {...state}
    switch(action.type){
        case actionTypes.CHANGE_DETAIL:
            newState.title = action.title
            newState.content = action.content
    }
    return newState
}