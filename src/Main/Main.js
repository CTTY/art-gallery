import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import DesignManager from '../DesignManager/DesignManager'
import Carousel from '../Carousel/Carousel'
import Login from '../Login/Login';

// The Main component renders one of the three provided
// Routes (provided that one matches). Both the /roster
// and /schedule routes will match any pathname that starts
// with /roster or /schedule. The / route will only match
// when the pathname is exactly the string "/"
const Main = () => (
  <main>
    <Switch>
    <Route path='/redirectToStatic' component={() => { 
     window.location.href = 'https://github.com/CTTY/art-gallery'; 
     return null;
    }}/>
    <Route exact path="/Projects" component={Carousel} />
    <Route exact path="/DesignManager" component={DesignManager} />
    <Route exact path="/Login" component={Login} />
    </Switch>
  </main>
)

export default Main;