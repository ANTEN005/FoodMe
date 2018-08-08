import React from 'react'
import { Card, Icon, Button} from 'semantic-ui-react'
import PropTypes from 'prop-types';

export default function RecipeCard({recipe}){
    console.log(recipe.text)
    return(
        <Card
            image='/assets/food2.jpg'
            header= {recipe.text}
            meta={recipe.ingredients}
            description={recipe.description}
        />
    )
}

RecipeCard.propTypes ={
    recipe: PropTypes.object.isRequired
}