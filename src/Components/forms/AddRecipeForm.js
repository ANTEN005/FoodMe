import React, { Component } from 'react'
import { Button, Checkbox, Form, Input, Radio, Select, TextArea } from 'semantic-ui-react'
import PropTypes from "prop-types";


class AddRecipeForm extends Component {
  state = {
    data: {
      name: "",
      category: "",
      ingredients: "",
      description: ""
    },
    errors: {}
  };

  onChange = e =>
    this.setState({
      ...this.state,
      data: { ...this.state.data, [e.target.name]: e.target.value }
    });

  onSubmit = e => {
    console.log(this.state);
    e.preventDefault();
    this.props
      .submit(this.state.data)
  };

  render() {
    const { data } = this.state
    return (

      <Form onSubmit={this.onSubmit}>
        <Form.Field>
          <label htmlFor="text">Recipe name</label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Enter recipe name"
            value={data.name}
            onChange={this.onChange}
          />
        </Form.Field>

        <Form.Field>
          <label htmlFor="text">Ingredients</label>
          <input
            type="text"
            id="ingredients"
            name="ingredients"
            placeholder="Enter ingridients"
            value={data.ingredients}
            onChange={this.onChange}
          />
        </Form.Field>

      <Form.Field control={TextArea} label='About' id="description"
            name="description" placeholder='Tell us more about you...' value={data.description}
            onChange={this.onChange} >
      </Form.Field>
     {/*    <Form.Field>
        <label htmlFor="textarea">Description</label>
        
        <input
        type="text"
        id="description"
        name="description"
        placeholder='Step by step guide for your recipe' 
        value={data.description} 
        onChange={this.onChange}
        /> */}
        <Button primary>Add Recipe</Button>
      </Form>
     /*  /* <Form onSubmit={this.onSubmit}>
        <Form.Group widths='equal'>
          <Form.Field control={Input} id="name" label='Name of recipe' placeholder='Name of recipe' value={data.name} onChange={this.onChange}/>
        </Form.Group>
        <Form.Group inline>
          <label>Category</label>
          <Form.Field control={Checkbox} label='Pasta' value='Pasta' checked={data === 'Pasta'} onChange={this.handleChange} />
          <Form.Field control={Checkbox} label='Hamburger' value='Hamburger' checked={data === 'Hamburger'} onChange={this.handleChange} />
          <Form.Field control={Checkbox} label='Vego' value='Vego' checked={data === 'Vego'} onChange={this.handleChange} />
        </Form.Group>
        <Form.Field control={TextArea} label='Ingredients' placeholder='Write down the ingredients needed' value={data.ingredients} onChange={this.handleChange} />
        <Form.Field control={TextArea} label='Description' placeholder='Step by step guide for your recipe' value={data.description} onChange={this.handleChange} />
        <Form.Field control={Button}>Add Recipe</Form.Field>
      </Form> */
    );
  }
}

AddRecipeForm.propTypes = {
  submit: PropTypes.func.isRequired
};

export default AddRecipeForm