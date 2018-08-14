import React from 'react';
import {Form, Dropdown} from 'semantic-ui-react';
import axios from 'axios';
import PropTypes from 'prop-types';
//when user types we will send request to server, who will ping api
//which will send back data to server who will parse this data and feed it to us
// we will populate options and recipes, so when user chooses its recipe we do not 
//need to make another request to the server
class SearchRecipeForm extends React.Component{
    state = {
        query: "",
        loading: false,
        options: [], //array of objects
        recipes:{}

    }

    onSearchChange = (e, data) => {
        clearTimeout(this.timer);
        this.setState({
            query: data
        });
        this.timer=setTimeout(this.fetchOptions, 1000);
    }

    onChange = (e, data) => { 
        this.setState({ query: data.value });
        console.log(this.state.recipes[data.value]);
        this.props.onRecipeSelect(this.state.recipes[data.value]);
      };
    
    fetchOptions = () => {
        if(!this.state.query) return;
        this.setState({loading: true});
        axios.get(`/api/getallrecipes/search?q=${this.state.query}`)
        .then(res => res.data.recipes)
        .then(recipes => {
            console.log(recipes)
            const options = [];
            const recipesHash = {};
            recipes.forEach(recipe => {
              recipesHash[recipe._id] = recipe;
              options.push({
                key: recipe._id,
                value: recipe._id,
                text: recipe.name
              });
            });
            this.setState({ loading: false, options, recipes: recipesHash });
            console.log(options);
            console.log(recipes);
          });

    }

    render(){
        return(
            <Form>
                <Dropdown
                    search
                    fluid
                    placeholder="Search for recipe"
                    value={this.state.query}
                    onSearchChange={this.onSearchChange} //when user types something
                    options={this.state.options}
                    loading={this.state.loading}
                    onChange={this.onChange}
                />
            </Form>
        );
    }
}

SearchRecipeForm.propTypes = {
    onRecipeSelect: PropTypes.func.isRequired
  };
  

export default SearchRecipeForm;