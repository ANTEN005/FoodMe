/* import React from "react";
import { connect } from "react-redux";
import { fetchRecipes} from "../../actions/recipes";
import RecipeCard from '../cards/RecipeCard';
import {Card} from 'semantic-ui-react';
import {Link} from 'react-router-dom';
import {getRecipeDetails} from "../../actions/recipes";

export default function RecipeList ({recipes, onSetSelectedRecipe}){

  const cards = () => {
    return recipes.map(recipe => {
      return (
        <Link to={'/dashboard'} onClick={ () => onSetSelectedRecipe(recipe)}>
        <RecipeCard key={recipe.id} recipe={recipe}/>
        </Link>
      )
    })
  }

  return (
    <Card.Group>
      {cards()}
    <Card.Group>
  )
}
 */