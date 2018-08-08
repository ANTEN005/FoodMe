import React from "react";
import { connect } from "react-redux";
import { fetchRecipes} from "../../actions/recipes";
import RecipeCard from '../cards/RecipeCard';
import {Card} from 'semantic-ui-react';

export default function RecipeList ({recipes}){

  const cards = () => {
    return recipes.map(recipe => {
      return (
        <RecipeCard key={recipe.id} recipe={recipe}/>
      )
    })
  }

  return (
    <Card.Group>
      {cards()}
    </Card.Group>
  )
}