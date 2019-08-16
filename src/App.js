import React from 'react';
import './App.css';
import './style.css'

import Preloader from './Preloader/Preloader';
import Header from './Header/Header';
import Carousel from './Carousel/Carousel';


function App() {
  return (
    <React.Fragment>

      <Header />
      <Carousel />
      <script src="./js/jquery.min.js"></script>
      <script src="./js/popper.min.js"></script>
      <script src="./js/bootstrap.min.js"></script>
      <script src="./js/mona.bundle.js"></script>
      <script src="./js/default-assets/active.js"></script>
    </React.Fragment>
    
  );
}

export default App;
