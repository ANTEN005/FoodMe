import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from "react-redux";
import { Link} from "react-router-dom";
import { Container, Header, Button, Segment, Grid, Divider, Menu } from "semantic-ui-react";
import {Carousel} from 'react-bootstrap';
import './HomePage.css';
import {logout} from '../../actions/auth';


//When user is logged in we have user record with token in redux state
//when we click on logout button we dispatch the logout thunk action in auth
const Homepage = ({isAuthenticated, logout}) => (
    <div>
        {isAuthenticated ? (
            <button onClick={() => logout()}>Logout </button> 
        ):( 
        <div>
        <Carousel className="carousel">
            <Carousel.Item>
              <img alt="" className="Image" src="/assets/food3.jpg"/>
              <Carousel.Caption>
                  <h3>Find new Recipes!</h3>
              </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
              <img alt="" className="Image" src="/assets/food6.jpg" />
              <Carousel.Caption>
                  <h3>Share pictures with your friends!</h3>
              </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
              <img alt="" className="Image" src="/assets/food7.jpg"/>
              <Carousel.Caption>
                  <h3>All in one site!</h3>
              </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
        <Grid>
          <Grid.Column width={8} style={{ padding: "100px 100px 0 100px" }}>
            <Header as={Link} to='/signup' style={{ fontSize: "3em" }}>
              {"Sign up here!"}
            </Header>
            <Divider />
          </Grid.Column>
          <Grid.Column width={8}>
            <img src={'/assets/food4.jpg'} alt="logo" style={{ width: "100%", zIndex: "-1" }} />
          </Grid.Column>
        </Grid>
        </div>
        )}
    </div>
);
Homepage.propTypes ={
    isAuthenticated: PropTypes.bool.isRequired,
    logout: PropTypes.func.isRequired
};
//false if token is undefined otherwise true
function mapStateToProps(state){
    return {
        isAuthenticated: !!state.user.token    
    }    
}
export default connect(mapStateToProps, {logout})(Homepage);