import React,{Component} from 'react'
import {connect} from 'react-redux'
import {actionCreators} from '../store'
import {Link} from 'react-router-dom'
class List extends Component {
    render(){
        const {list,getMore} = this.props
        return (
            <div className="list">
                <ul>
                    {
                        list.map((item,index) => {
                            return (
                                <li className="item" key={index}>
                                    <Link to={'/detail/'+item.id}>
                                    <div className="item-left">
                                        <h3>{item.title}</h3>
                                        <p>{item.desc}</p>
                                    </div>
                                    <div className="item-right">
                                        <img width="150" src={item.imgUrl} />
                                    </div>
                                    </Link>
                                </li>
                            )
                        })
                    }
                </ul>
                <div className="getmore" onClick={getMore}>阅读更多</div>
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        list:state.index.list
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        getMore(){
            dispatch(actionCreators.getMoreList())
        }
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(List)
