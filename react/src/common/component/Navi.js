import React from 'react'
import { Link } from 'react-router-dom'
import 'common/style/Common.css'
const Navi = () => {

    return (<>
        <nav className="navbar navbar-default">
            <div className="container">
                <div className="navbar-header">
                <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
                    <span className="icon-bar"></span>
                    <span className="icon-bar"></span>
                    <span className="icon-bar"></span>                        
                </button>
                <a className="navbar-brand" href="#">Me</a>
                </div>
                <div className="collapse navbar-collapse" id="myNavbar">
                <ul className="nav navbar-nav navbar-right">
                    <li><a href="#">WHO</a></li>
                    <li><a href="#">WHAT</a></li>
                    <li><a href="#">WHERE</a></li>
                    <li><Link to="/board/news">News</Link></li>
                    <li><Link to="/board/seoul-cctv">CCTV</Link></li>
                    <li><Link to="/board/counter">Counter</Link></li>
                    <li><Link to="/board/redux-counter">ReduxCounter</Link></li>
                </ul>
                </div>
            </div>
            </nav>
    </>)
}
export default Navi