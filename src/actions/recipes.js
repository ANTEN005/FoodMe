import api from '../api';
import { SAVE_NEW_RECIPE, FETCH_RECIPES_BEGIN, FETCH_RECIPES_SUCCESS, FETCH_RECIPES_FAILURE } from '../types';
import axios from 'axios';


export const saveRecipe = (recipe) => ({
    type: SAVE_NEW_RECIPE,
    recipe
})

export const addRecipe = (data) => (dispatch) =>
    api.recipe.addRecipe(data).then(recipe => dispatch(saveRecipe(recipe)))
    .then(dispatch(fetchRecipes()))

export function fetchRecipes(){
    return dispatch => {
        dispatch(fetchRecipesBegin());
        axios.get("/api/recipes/search")
        .then(res => res.data.recipes)
        .then(recipes => {
            const recipearray = [];
            const recipesHash = {};
            recipes.forEach(recipe => {
              recipesHash[recipe.id] = recipe;
              recipearray.push({
                key: recipe.id,
                value: recipe.id,
                text: recipe.name
              });
            });
            dispatch(fetchRecipesSuccess(recipearray));
            return recipearray;
        })
        .catch(error => dispatch(fetchRecipesFailure(error)));
    };
}

//Handle HTTP errors since fetch won´t
function handleErrors(response){
    if(!response.ok){
        throw Error(response.statusText);
    }
    return response;
}

export const fetchRecipesBegin = () => ({
    type: FETCH_RECIPES_BEGIN
});

export const fetchRecipesSuccess = recipes => ({
    type: FETCH_RECIPES_SUCCESS,
    payload: { recipes }
});

export const fetchRecipesFailure = error => ({
    type: FETCH_RECIPES_FAILURE,
    payload: {error}
});
