import React, {Component} from 'react';
import ReactDOM from "react-dom";
import { withRouter, Route, Switch, Link } from "react-router-dom";

import './App.css';
import './style.css';

import { getCurrentUser } from './Utils/APIUtils';
import { ACCESS_TOKEN } from './Constants/Constants';
import { notification } from 'antd';

import Preloader from './Preloader/Preloader';
import Header from './Header/Header';
import Footer from './Footer/Footer';
import DesignManager from './DesignManager/DesignManager';
import RBCarousel from './Carousel/Carousel';
import Login from './Login/Login';
import PrivateRoute from './Private/Private';
import Email from './Email/Email';



class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentUser: null,
      isAuthenticated: false,
      isLoading: false
    }
    this.handleLogout = this.handleLogout.bind(this);
    this.loadCurrentUser = this.loadCurrentUser.bind(this);
    this.handleLogin = this.handleLogin.bind(this);

    notification.config({
      placement: 'topRight',
      top: 70,
      duration: 3,
    });    
  }

  loadCurrentUser() {
    this.setState({
      isLoading: true
    });
    getCurrentUser()
    .then(response => {
      this.setState({
        currentUser: response,
        isAuthenticated: true,
        isLoading: false
      });
    }).catch(error => {
      this.setState({
        isLoading: false
      });  
    });
  }

  componentDidMount() {
    this.loadCurrentUser();
  }

  handleLogout(redirectTo="/", notificationType="success", description="You're successfully logged out.") {
    localStorage.removeItem(ACCESS_TOKEN);

    this.setState({
      currentUser: null,
      isAuthenticated: false
    });

    this.props.history.push(redirectTo);
    
    notification[notificationType]({
      description: description,
    });
  }

  handleLogin() {
    notification.success({
      description: "You're successfully logged in.",
    });
    this.loadCurrentUser();
    this.props.history.push("/DesignManager");
  }

  render(){
    return (
      <React.Fragment>
        {/* <Preloader /> */}
        <Header />
        <Switch>
          <Route path='/redirectToStatic' component={() => { 
          window.location.href = 'https://github.com/CTTY/art-gallery'; 
          return null;
          }}/>
          <Route exact path="/" component={RBCarousel} />
          <Route exact path="/Email" component={Email} />
          <Route path="/login" 
                 render={(props) => <Login onLogin={this.handleLogin} {...props} />}></Route>
          <PrivateRoute authenticated={this.state.isAuthenticated} path="/DesignManager" component={DesignManager} handleLogout={this.handleLogout}></PrivateRoute>
      </Switch>
        <Footer />
        {/* <script src="./js/jquery.min.js"></script>
        <script src="./js/popper.min.js"></script>
        <script src="./js/bootstrap.min.js"></script>
        <script src="./js/mona.bundle.js"></script>
        <script src="./js/default-assets/active.js"></script> */}
      </React.Fragment>
      
    );
  }
}

export default withRouter(App);
