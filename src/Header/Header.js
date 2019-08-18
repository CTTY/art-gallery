import React from 'react';
import '../style.css';

import Navbar from 'react-bootstrap/Navbar'

// style={{background-image : url(./img/core-img/curve.png)}}
function Header(){
    
    return (
        <div className="header-area">
            <div className="main-header-area">
                <div className="classy-nav-container breakpoint-off">
                    <Navbar className="classy-navbar justify-content-between navbar-fixed-top" expand="lg" variant="light" bg="dark" fixed="top">
                        {/* background curve */}
                        {/* <div className="bg-curve" style={{'background-image' : 'url(1' + '../img/core-img/curve.png' + ')'}}></div> */}
                        
                        {/* logo */}
                        {/* <a className="nav-brand" href="index.html"><img src="./img/core-img/logo.jpeg" alt="" height="60" width="60"></img></a> */}
                        <Navbar.Brand href="index.html">
                            <img
                                alt=""
                                src="../img/core-img/logo.jpeg"
                                height="60"
                                className="nav-brand"
                            />
                        </Navbar.Brand>

                        {/* <div className="classy-navbar-toggler">
                            <span className="navbarToggler"><span></span><span></span><span></span></span>
                        </div> */}
                        <div className="classy-menu">
                            {/* <div className="classycloseIcon">
                                <div className="cross-wrap"><span className="top"></span><span className="bottom"></span></div>
                                </div> */}

                            <div className="classynav">
                                <ul id="nav">
                                <li><a href="./index.html">Home</a></li>
                                <li><a href="#">Pages</a>
                                    <ul className="dropdown">
                                    <li><a href="../index.html">- Home</a></li>
                                    <li><a href="../projects.html">- Projects</a></li>
                                    <li><a href="../designer.html">- Designer</a></li>
                                    <li><a href="../developers.html">- Developers</a></li>
                                    </ul>
                                </li>
                                <li className="current-item"><a href="./projects.html">Projects</a></li>
                                <li><a href="#">About Us</a>
                                    <ul className="dropdown">
                                    <li><a href="./designer.html">- Designer</a></li>
                                    <li><a href="./developers.html">- Developers</a></li>
                                    </ul>
                                </li>
                                </ul>
                            </div>
                        </div>
                    </Navbar>
                </div>
            </div>
        </div>
    )
    
}

export default Header;