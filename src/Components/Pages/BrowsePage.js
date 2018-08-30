import React from 'react';
import {Segment} from 'semantic-ui-react';
import SearchRecipeForm from '../forms/SearchRecipeForm';
import {getRecipeDetails} from '../../actions/recipes';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';

class BrowsePage extends React.Component{
    state = {
        recipe: null
    }

    onRecipeSelect = recipe => {
        this.setState({ recipe });
        console.log(recipe);
        this.props.dispatch(getRecipeDetails(recipe));
        this.props.history.push("/recipedetails");


      };
    
    render(){
        return(
            <Segment>
                <h1>Search for recipes</h1>
                <SearchRecipeForm onRecipeSelect={this.onRecipeSelect}/>
            </Segment>
        );
    }
}
const mapStateToProps = state => ({
    recipe: state.recipe
  });

  BrowsePage.propTypes = {
    history: PropTypes.shape({
      push: PropTypes.func.isRequired
    }).isRequired
  };

export default connect(mapStateToProps)(BrowsePage);;