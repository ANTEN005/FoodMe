import React from 'react';
import { connect } from 'react-redux';
import { Container, Header, Segment, Grid, Divider, Image, Button} from 'semantic-ui-react';
import { addToMyRecipes} from "../../actions/recipes";

class RecipeDetailsPage extends React.Component {
    render() {
      const { selectedRecipe} = this.props;
      return(
      <Grid columns={3} relaxed>
      <Grid.Column>
        <Header as='h5' textAlign='center'>{selectedRecipe.name} </Header>
        <Segment basic>
          <Image src={'/assets/food2.jpg'} size='medium' floated='left' />
          <Button onClick={ () => this.props.dispatch(addToMyRecipes(selectedRecipe))}>save to my recipes</Button>
        </Segment>
      </Grid.Column>
      <Grid.Column>
        <Header as='h5' textAlign='center'>Ingredients</Header>
        <Segment basic>{selectedRecipe.ingredients}</Segment>
      </Grid.Column>
      <Grid.Column>
        <Header as='h5' textAlign='center'>Description</Header>
        <Segment basic>{selectedRecipe.description}</Segment>
      </Grid.Column>
      </Grid>
    )}
    }
    const mapStateToProps = (state) => ({
      selectedRecipe: state.selectedRecipe,
    })
 export default connect(mapStateToProps)(RecipeDetailsPage);