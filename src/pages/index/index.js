import React,{Component} from 'react'
import '../../static/styles/index.css'
import List from './components/List'
import {connect} from 'react-redux'
import {actionCreators} from './store'
class Index extends Component {
    render(){
        return (
            <div className="main">
                <div className="main-left">
                    <div className="banner">
                        <img width="625"  src="//upload.jianshu.io/admin_banners/web_images/4582/2db83cc6f08d13c2f83002238ca32b784266c4fb.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540" />
                    </div>
                    <List></List>
                </div>
                <div className="main-right"></div>
            </div>
        )
    }
    componentDidMount(){
        this.props.getList()
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        getList(){
            dispatch(actionCreators.getList())
        }         
    }
}
export default connect(null,mapDispatchToProps)(Index)