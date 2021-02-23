import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import SignUp from "./LoginFlow/SignUp";
import SignIn from "./LoginFlow/SignIn";
import Menu from "./MainApp/Menu";
import CreateOrder from "./MainApp/CreateOrder";

class App extends React.Component{

  constructor(props) {
    super(props);
  }


  render () {
    return (
        <Router>
          <Route path="/signup" exact={true} component={() => <SignUp />} />
          <Route path="/signin" exact={true} component={SignIn} />
          <Route path="/menu" exact={true} component={Menu} />
            <Route path="/order" exact={true} component={CreateOrder} />
        </Router>
    );
  }
}

export default App;
