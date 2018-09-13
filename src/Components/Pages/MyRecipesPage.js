import React from "react";
import { connect } from "react-redux";
import { fetchMyRecipes, getRecipeDetails} from "../../actions/recipes";
import RecipeList from "../lists/RecipeList";
import RecipeCard from '../cards/RecipeCard';
import {Card} from 'semantic-ui-react';
import {Link} from 'react-router-dom';


class MyRecipesPage extends React.Component {
  componentDidMount() {
    this.props.dispatch(fetchMyRecipes());
  }
  render() {
    const { error, loading, recipes } = this.props;
    console.log(recipes);
    if (error) {
      return <div>No recipes were found.</div>;
    }

    if (loading) {
      return <div>Loading...</div>;
    }
    
    return (
      <div>
        <h1>Your Recipes</h1>
        <Card.Group>
        {recipes.map(recipe => 
        <Link to={'/recipedetails'} onClick={ () => this.props.dispatch(getRecipeDetails(recipe))}>
        <RecipeCard key={recipe.id} recipe={recipe}/>
        </Link>
        )}
        </Card.Group>
      </div>
    )    
  }
}


const mapStateToProps = state => ({
  recipes: state.recipes.items,
  loading: state.recipes.loading,
  error: state.recipes.error
});

export default connect(mapStateToProps)(MyRecipesPage);

