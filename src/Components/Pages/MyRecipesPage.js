import React from "react";
import { connect } from "react-redux";
import { fetchRecipes} from "../../actions/recipes";

class MyRecipesPage extends React.Component {
  componentDidMount() {
    this.props.dispatch(fetchRecipes());
  }

  render() {
    const { error, loading, recipes } = this.props;
    console.log(recipes);
    if (error) {
      return <div>Error! {error.message}</div>;
    }

    if (loading) {
      return <div>Loading...</div>;
    }
    
    return (
      <ul>
        {recipes.map(recipe =>
          <li key={recipe.id}>{recipe.text}</li>
        )}
      </ul>
    );
  }
}

const mapStateToProps = state => ({
  recipes: state.recipes.items,
  loading: state.recipes.loading,
  error: state.recipes.error
});

export default connect(mapStateToProps)(MyRecipesPage);

