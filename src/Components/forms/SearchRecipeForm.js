import React from 'react';
import {Form, Dropdown} from 'semantic-ui-react';
import axios from 'axios';
//when user types we will send request to server, who will ping api
//which will send back data to server who will parse this data and feed it to us
// we will populate options and recipes, so when user chooses its book we do not 
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
    fetchOptions = () => {
        if(!this.state.query) return;
        this.setState({loading: true});
        axios.get(`/api/recipes/search?q=${this.state.query}`)
        .then(res => res.data.recipes)
        .then(recipes => {
            const options = [];
            const recipesHash = {};
            recipes.forEach(recipe => {
              recipesHash[recipe.id] = recipe;
              options.push({
                key: recipe.id,
                value: recipe.id,
                text: recipe.name
              });
            });
            this.setState({ loading: false, options, recipes: recipesHash });
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
                />
            </Form>
        );
    }
}

export default SearchRecipeForm;