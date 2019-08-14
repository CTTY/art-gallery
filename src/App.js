import React from 'react';
import logo from './logo.svg';
import './App.css';
import './style.css';

import Preloader from './Preloader/Preloader';
import Header from './Header/Header';

function App() {
  return (
    <React.Fragment>
      {/* <Preloader /> */}
      <Header />
      <script src="./js/jquery.min.js"></script>
      <script src="./js/popper.min.js"></script>
      <script src="./js/bootstrap.min.js"></script>
      <script src="./js/mona.bundle.js"></script>
      <script src="./js/default-assets/active.js"></script>
    </React.Fragment>
    
  );
}

export default App;
