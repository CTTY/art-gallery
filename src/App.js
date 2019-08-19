import React from 'react';
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";

import './App.css';
import './style.css';

import Carousel from './Carousel/Carousel';
import Preloader from './Preloader/Preloader';
import Header from './Header/Header';
import Breadcrumb from './Breadcrumb/Breadcrumb';
import Footer from './Footer/Footer';
import DesignManager from './DesignManager/DesignManager';
import RBCarousel from './Carousel/Carousel';
import Main from './Main/Main';


function App() {
  return (
    <React.Fragment>
      {/* <Preloader /> */}
      <Header />
      <Main />
      <Footer />
      {/* <script src="./js/jquery.min.js"></script>
      <script src="./js/popper.min.js"></script>
      <script src="./js/bootstrap.min.js"></script>
      <script src="./js/mona.bundle.js"></script>
      <script src="./js/default-assets/active.js"></script> */}
    </React.Fragment>
    
  );
}

export default App;
