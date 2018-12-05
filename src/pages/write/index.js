import React,{Component} from 'react'
import {connect} from 'react-redux'
import {Redirect} from 'react-router-dom'
class Write extends Component {
    render(){
        const {loginStatus} = this.props
        if(loginStatus){
            return <div id="write" style={{marginTop:'100px',textAlign:'center'}}>写文章</div>
        }else{
            return <Redirect to="/login"></Redirect>
        }
    }
}
const mapStateToProps = (state) => ({
    loginStatus:state.login.loginStatus
})
export default connect(mapStateToProps,null)(Write)