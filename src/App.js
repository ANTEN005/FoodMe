import React from 'react';
import PropTypes from 'prop-types';
import {Route} from "react-router-dom";
import Homepage from "./Components/Pages/Homepage";
import LoginPage from "./Components/Pages/LoginPage";
import DashboardPage from "./Components/Pages/DashboardPage";
import UserRoute from './Components/routes/UserRoute';
import GuestRoute from './Components/routes/GuestRoute';
import SignupPage from "./Components/Pages/SignupPage";
import RecipePage from "./Components/Pages/RecipePage";
import TopNavigation from './Components/navigation/TopNavigation';
import {connect} from 'react-redux';
import AddRecipePage from './Components/Pages/AddRecipePage';
import MyRecipesPage from './Components/Pages/MyRecipesPage';
import RecipeDetailsPage from './Components/Pages/RecipeDetailsPage';

//only show navbar if user is authenticated
const App = ({location, isAuthenticated}) => (
  <div className="ui container">
    {isAuthenticated && <TopNavigation />}
    <Route location={location} path="/" exact component={Homepage}/>
    <GuestRoute location={location} path="/login" exact component={LoginPage}/>
    <GuestRoute location={location} path="/signup" exact component={SignupPage}/>
    <UserRoute location={location} path="/dashboard"  exact component={DashboardPage}/>
    <UserRoute location={location} path="/findrecipes" exact component={RecipePage}/>
    <UserRoute location={location} path="/addrecipes" exact component={AddRecipePage}/>
    <UserRoute location={location} path="/myrecipes" exact component={MyRecipesPage}/>
    <UserRoute location={location} path="/recipedetails" exact component={RecipeDetailsPage}/>
  </div>
);

App.propTypes = {
  location: PropTypes.shape({
    pathname: PropTypes.string.isRequired
  }).isRequired,
  isAuthenticated: PropTypes.bool.isRequired
}

function mapStateToProps(state){
  return{
    isAuthenticated: !!state.user.token
  }
}
export default connect(mapStateToProps)(App);
