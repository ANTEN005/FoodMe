import React, { Component } from 'react'
import { Button, Checkbox, Form, Input, Radio, Select, TextArea } from 'semantic-ui-react'

const options = [
  { key: 'm', text: 'Male', value: 'male' },
  { key: 'f', text: 'Female', value: 'female' },
]

class AddRecipeForm extends Component {
  state = {}

  handleChange = (e, { value }) => this.setState({ value })

  render() {
    const { value } = this.state
    return (
      <Form>
        <Form.Group widths='equal'>
          <Form.Field control={Input} label='Name of recipe' placeholder='Name of recipe' />
        </Form.Group>
        <Form.Group inline>
          <label>Category</label>
          <Form.Field control={Checkbox} label='Pasta' value='1' checked={value === '1'} onChange={this.handleChange} />
          <Form.Field control={Checkbox} label='Hamburger' value='2' checked={value === '2'} onChange={this.handleChange} />
          <Form.Field control={Checkbox} label='Vego' value='3' checked={value === '3'} onChange={this.handleChange} />
        </Form.Group>
        <Form.Field control={TextArea} label='Ingredients' placeholder='Write down the ingredients needed' />
        <Form.Field control={TextArea} label='Description' placeholder='Step by step guide for your recipe' />
        <Form.Field control={Button}>Add Recipe</Form.Field>
      </Form>
    )
  }
}

export default AddRecipeForm