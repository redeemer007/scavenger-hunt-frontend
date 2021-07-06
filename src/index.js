import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.css';
//import Branch from './components/Branch';
import {  BrowserRouter as Router,  Switch,  Route,  Link} from "react-router-dom";
import Login from './components/Login'
import SawNotification from './components/SawNotification'
import SearchByPin from './components/SearchByPin'
import ListOfBranches from './screens/ListOfBranches'
import Admin from './screens/Admin';

ReactDOM.render(
  <Router>
    <Switch>
      <Route path="/login" component={Login} />
      <Route path="/SawNotification" component={SawNotification} exact />
      <Route path="/SearchByPin" component={SearchByPin} exact />
      <Route path="/ListOfBranches/:pincode" component={ListOfBranches} exact />
      <Route path="/admin" component={Admin} exact />
      
          
          {/* <Route path="/">
            <Home />
          </Route> */}
        </Switch>
  </Router>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
