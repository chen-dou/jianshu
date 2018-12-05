import React,{Component} from 'react'
import '../../static/styles/detail.css'
import {connect} from 'react-redux'
import {actionCreators} from './store'
class Detail extends Component {
    render(){
        const {title,content} = this.props
        return (
            <div id="detail">
                <h2>{title}</h2>
                <div className="content" dangerouslySetInnerHTML={{ __html: content }}>
                </div>
            </div>
        )
    }
    componentDidMount(){
        this.props.getDetail(this.props.match.params.id)
    }
}
const mapStaeToProps = (state) => ({
    title:state.detail.title,
    content:state.detail.content  
})
const mapDispatchToProps = (dispatch) => ({
    getDetail(id){
        dispatch(actionCreators.getDetail(id))     
    }
    
})
export default connect(mapStaeToProps,mapDispatchToProps)(Detail)
