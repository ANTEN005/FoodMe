import React from 'react';
import PropTypes from 'prop-types';
import {Route} from "react-router-dom";
import Homepage from "./Components/Pages/Homepage";
import LoginPage from "./Components/Pages/LoginPage";
import DashboardPage from "./Components/Pages/DashboardPage";
import UserRoute from './Components/routes/UserRoute';
import GuestRoute from './Components/routes/GuestRoute';
import SignupPage from "./Components/Pages/SignupPage";

const App = ({location}) => (
  <div className="ui container">
    <Route location={location} path="/" exact component={Homepage}/>
    <GuestRoute location={location} path="/login" exact component={LoginPage}/>
    <GuestRoute location={location} path="/signup" exact component={SignupPage}/>
    <UserRoute location={location} path="/dashboard" exact component={DashboardPage}/>
  </div>
);

App.propTypes = {
  location: PropTypes.shape({
    pathname: PropTypes.string.isRequired
  }).isRequired
}
export default App;
