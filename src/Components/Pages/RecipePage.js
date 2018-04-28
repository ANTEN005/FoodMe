import React from 'react';
import {Segment} from 'semantic-ui-react';
import SearchRecipeForm from '../forms/SearchRecipeForm';

class RecipePage extends React.Component{
    state = {
        recipe: null
    }

    render(){
        return(
            <Segment>
                <h1> Add new recipe to your collection</h1>
                <SearchRecipeForm/>>
            </Segment>
        );
    }
}

export default RecipePage;