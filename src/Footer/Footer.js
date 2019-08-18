import React from 'react';
import '../style.css';

import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar'

function Footer(){
    return (
        <div class="footer-area section-padding-80-0">
            <div class="container">
                <div class="row justify-content-between">


                    
            <div class="col-12 col-sm-6 col-lg-4 col-xl-3">
              <div class="single-footer-widget mb-60">

                {/* <a href="#" class="d-block mb-4"><img src="./img/core-img/logo.jpeg" height="60" width="60" alt=""></a> */}
                <Navbar.Brand href="index.html">
                            <img
                                alt=""
                                src="../img/core-img/logo.jpeg"
                                height="60"
                                className="nav-brand"
                            />
                </Navbar.Brand>

                <p>A place of art.</p>
                {/* <div class="copywrite-text">
                  <p>&copy; 
    Copyright &copy;<script>document.write(new Date().getFullYear());</script> All rights reserved | This website is built with &hearts; by <a href="https://www.linkedin.com/in/yexiang-chang/" target="_blank">Shawn Chang  Abby Lu</a>
                </div> */}

            </div>
        </div>


                    
                    <div class="col-12 col-lg-4 col-xl-3">
                        <div class="single-footer-widget mb-60">
                            
                            <h4 class="widget-title">Contact</h4>
                            
                            <div class="footer-content mb-30">
                                <h4>+1-607-379-4550</h4>
                                <h6>Maplewood Apartment, Ithaca, NY 14850</h6>
                            </div>
                            
                            <div class="footer-social-info">
                                <a href="#" class="facebook" data-toggle="tooltip" data-placement="top" title="Facebook"><i
                                        class="fa fa-facebook"></i></a>
                                <a href="#" class="twitter" data-toggle="tooltip" data-placement="top" title="Twitter"><i
                                        class="fa fa-twitter"></i></a>
                                <a href="#" class="pinterest" data-toggle="tooltip" data-placement="top" title="Pinterest"><i
                                        class="fa fa-pinterest"></i></a>
                                <a href="#" class="instagram" data-toggle="tooltip" data-placement="top" title="Instagram"><i
                                        class="fa fa-instagram"></i></a>
                                <a href="#" class="youtube" data-toggle="tooltip" data-placement="top" title="YouTube"><i
                                        class="fa fa-youtube-play"></i></a>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
    
}

export default Footer;