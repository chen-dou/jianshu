import axios from 'axios'
import * as actionTypes from './actionTypes'
const changeLogin = (loginStatus) => ({
    type:actionTypes.CHANGE_LOGIN,
    loginStatus
})
export const login = (user,pwd) => {
    return (dispatch) => {
        axios.get(`/api/login.json?user=${user}&pwd=${pwd}`).then((res)=>{
            res = res.data
            dispatch(changeLogin(res.data))
        }).catch(() => {
            console.log('err')
        })
    }
}
export const logout = () => ({
    type:actionTypes.LOGOUT
})