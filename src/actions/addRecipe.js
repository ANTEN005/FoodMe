import api from '../api';
import { SAVE_NEW_RECIPE } from '../types';

export const saveRecipe = (recipe) => ({
    type: SAVE_NEW_RECIPE,
    recipe
})

export const addRecipe = (data) => (dispatch) =>
    api.recipe.addRecipe(data).then(recipe => dispatch(saveRecipe(recipe)))