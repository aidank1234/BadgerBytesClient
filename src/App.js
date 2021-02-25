import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import SignIn from "./LoginFlow/SignIn";
import AdminMain from "./MainApp/AdminMain";
import StaffMain from "./MainApp/StaffMain";
import SignInStaff from "./LoginFlow/SignInStaff";

class App extends React.Component{

  constructor(props) {
    super(props);
  }


  render () {
    return (
        <Router>
          <Route path="/signinadmin" exact={true} component={SignIn} />
          <Route path="/signinstaff" exact={true} component={SignInStaff} />
          <Route path="/admin" exact={true} component={AdminMain} />
          <Route path="/staff" exact={true} component={StaffMain} />
        </Router>
    );
  }
}

export default App;
