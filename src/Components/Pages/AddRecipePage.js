import React from 'react';
import AddRecipeForm from '../forms/AddRecipeForm';

class AddRecipePage extends React.Component {

    render(){
        return(
            <div>
                <h1>Add your recipe to your collection</h1>
                <AddRecipeForm/>
            </div>
        );
    }
};

export default AddRecipePage;