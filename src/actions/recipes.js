import api from '../api';

export const findRecipes = (query) => (dispatch) => 
api.user.findRecipes(query)