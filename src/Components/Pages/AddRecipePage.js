import React from 'react';
import AddRecipeForm from '../forms/AddRecipeForm';
import {connect} from 'react-redux';
import PropTypes from "prop-types";
import {addRecipe} from "../../actions/recipes";

class AddRecipePage extends React.Component {

    submit = (data) =>  this.props.addRecipe(data)
       // this.props.addRecipe(data).then(() => this.props.history.push('/dashboard'));
    render(){
        return(
            <div>
                <h1>Add your recipe to your collection</h1>
                <AddRecipeForm submit={this.submit}/>
            </div>
        );
    }
};

/* AddRecipePage.propTypes ={
    history:PropTypes.shape({
        push: PropTypes.func.isRequired
    }).isRequired,
    addRecipe: PropTypes.func.isRequired
}; */
AddRecipePage.propTypes ={
    addRecipe: PropTypes.func.isRequired
};
export default connect(null, {addRecipe})(AddRecipePage);