import * as actionTypes from './actionTypes'
import axios from 'axios';
const changeList = (data) => ({
    type:actionTypes.CHANGE_LIST,
    data
})
export const searchFocus = () => ({
    type:actionTypes.SEARCH_FOCUS
})
export const searchBlur = () => ({
    type:actionTypes.SEARCH_BLUR
})
export const mouseEnter = () => ({
    type:actionTypes.MOUSE_ENTER
})
export const mouseLeave = () => ({
    type:actionTypes.MOUSE_LEAVE
})
export const changePage = (page) => ({
    type:actionTypes.CHANGE_PAGE,
    page
})
export const getList = () => {
    return (dispatch) => {
        axios.get('/api/headerList.json').then((res) => {
            res = res.data
            dispatch(changeList(res.data))
        }).catch(() => {
            console.log('err')
        })
    }
}