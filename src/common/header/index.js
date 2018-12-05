import React,{Component} from 'react'
import logopic from '../../static/images/logo.png'
import '../../static/styles/header.css'
import { CSSTransition } from 'react-transition-group'
import {connect} from 'react-redux'
import {actionCreaters} from './store'
import {actionCreators as loginActionCreators} from '../../pages/login/store'
import {Link} from 'react-router-dom'
class Header extends Component{
    render(){
        const {focused,handleBlur,handleFocus,list,loginStatus,logout} = this.props
        return (
            <header>
                <div className="logo"><a href="#"><img src={logopic} height="56" /></a></div>
                <div className="container nav">
                    <ul>
                        <li className="tab active"><Link to="/">首页</Link></li>
                        <li className="tab"><a href="#">下载App</a></li>
                        <li className="search">
                            <form>
                                <CSSTransition
                                    in={focused}
                                    timeout={200}
                                    classNames="slide"
                                >
                                <div className={focused?'search-input focus':'search-input'}>
                                    <input onBlur={handleBlur} onFocus={() => {handleFocus(list)}} type="text" placeholder="搜索"/>
                                    <i className="iconfont">&#xe61e;</i>
                                </div>
                                </CSSTransition>
                                {this.getListArea()}    
                            </form>
                        </li>
                    </ul>
                </div>
                <div className="header-right">
                    <a className="style-mode-btn" href=""><i className="iconfont">&#xe636;</i></a>
                    {!loginStatus?<Link className="login" to="/login">登录</Link>:<a className="login"  onClick={logout}>退出</a>}
                    <a className="regist" href="">注册</a>
                    <Link className="write" to="/write"><i className="iconfont">&#xe60e;</i>写文章</Link>
                </div>
            </header>     
        )
    }
    getListArea(){
        const {focused,list,page,mouseIn,handleMouseEnter,handleMouseLeave,handleChangePage} = this.props
        const pageList = []
        if(list.length){
            for(let i=(page-1)*10;i<page*10;i++){
                if(i<list.length){
                    pageList.push(<div className="tag" key={list[i]}>{list[i]}</div>)
                }
            }
        }
        if(focused || mouseIn){
            return (
                <div className="search-tips" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                    <div className="search-ttitle">
                        <div className="search-hot">热门搜索</div>
                        <div className="change" onClick={() => {handleChangePage(page,list.length,this.spinIcon)}}>
                        <i ref={(icon) => {this.spinIcon = icon}} className="iconfont">&#xe851;</i>
                        换一批
                        </div>
                    </div>
                    <div className="search-tag">
                        {pageList}
                    </div>
                </div>
            )
        }else{
            return
        }
    }
}
const mapStateToProps = (state) => {
    return {
        focused:state.header.focused,
        list:state.header.list,
        page:state.header.page,
        mouseIn:state.header.mouseIn,
        loginStatus:state.login.loginStatus
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        handleFocus(list){
            list.length===0 && dispatch(actionCreaters.getList())
            dispatch(actionCreaters.searchFocus())
        },
        handleBlur(){
            dispatch(actionCreaters.searchBlur())
        },
        handleMouseEnter(){
            dispatch(actionCreaters.mouseEnter())
        },
        handleMouseLeave(){
            dispatch(actionCreaters.mouseLeave())    
        },
        handleChangePage(page,total,spin){
            let originAngle = spin.style.transform.replace(/[^0-9]/g,'')
            if(originAngle){
                originAngle = parseInt(originAngle)    
            }else{
                originAngle = 0    
            }
            spin.style.transform = `rotate(${originAngle+360}deg)`
            if(page < Math.ceil(total/10)){
                dispatch(actionCreaters.changePage(++page))
            }else{
                dispatch(actionCreaters.changePage(1))    
            }
        },
        logout(){
            dispatch(loginActionCreators.logout())
        }
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Header)