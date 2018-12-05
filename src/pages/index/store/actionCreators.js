import axios from 'axios'
import * as actionTypes from './actionTypes'
const changeList = (data) => ({
    type:actionTypes.CHANGE_LIST,
    data
})
const changeMoreList = (data) => {
    return {
        type:actionTypes.CHANGE_MORE_LIST,
        data
    }
}
export const getMoreList = () => {
    return (dispatch) => {
        axios.get('/api/indexList.json').then((res)=>{
            res = res.data
            const data = res.data
            dispatch(changeMoreList(data))
        }).catch((err)=>{
            console.log(err)
        })
    }
}
export const getList = () => {
    return (dispatch) => {
        axios.get('/api/index.json').then((res)=>{
            res = res.data
            const data = res.data
            dispatch(changeList(data))
        }).catch(()=>{
            console.log(456)
        })
    }
}