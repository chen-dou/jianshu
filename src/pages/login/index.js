import React,{Component} from 'react'
import '../../static/styles/login.css'
import {connect} from 'react-redux'
import {Redirect} from 'react-router-dom'
import {actionCreators} from './store'
class Login extends Component{
    render(){
        const {loginStatus,login} = this.props
        console.log(666)
        console.log(loginStatus)
        if(!loginStatus){
            return (
                <div id="login">
                    <form>
                        <input placeholder='用户名' name="user" ref={(user)=>{this.user = user}}/><br />
                        <input placeholder='密码' type="password" name="password" ref={(pwd)=>{this.pwd = pwd}} /><br />
                        <div className="btn" onClick={()=>{login(this.user,this.pwd)}}>登录</div>
                    </form>
                </div>
            )
        }else{
            return <Redirect to="/" />
        }
        
   }
}
const mapStateToProps = (state) => ({
    loginStatus:state.login.loginStatus
})
const mapDispatchToProps = (dispatch) => ({
    login(user,pwd){
        dispatch(actionCreators.login(user.value,pwd.value))    
    }
})
export default connect(mapStateToProps,mapDispatchToProps)(Login)