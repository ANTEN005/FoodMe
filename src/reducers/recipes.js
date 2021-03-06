import {SAVE_NEW_RECIPE, RECIPES_FETCHED, FETCH_RECIPES_BEGIN, FETCH_RECIPES_SUCCESS, FETCH_RECIPES_FAILURE, GET_RECIPE_DETAILS}  from '../types';
//reducers take states and actions and return a new state
const initialState = {
    items: [],
    loading: false,
    error: null
  };

  export const selectedRecipe = (state = {}, action) => {
    if(action.type === GET_RECIPE_DETAILS) {
      return {...action.payload}
    }
    return state;
  }
  
  
  export const recipes = (state = initialState, action) => {
    switch(action.type) {
      case RECIPES_FETCHED:
        return {...state, ...action.data.recipes};

      case SAVE_NEW_RECIPE:
        return action.recipe;
        
        
      case FETCH_RECIPES_BEGIN:
        // Mark the state as "loading" so we can show a spinner or something
        // Also, reset any errors. We're starting fresh.
        return {
          ...state,
          loading: true,
          error: null
        };
  
      case FETCH_RECIPES_SUCCESS:
        // All done: set loading "false".
        // Also, replace the items with the ones from the server
        return {
          ...state,
          loading: false,
          items: action.payload.recipes
        };
  
      case FETCH_RECIPES_FAILURE:
        // The request failed, but it did stop, so set loading to "false".
        // Save the error, and we can display it somewhere
        // Since it failed, we don't have items to display anymore, so set it empty.
        // This is up to you and your app though: maybe you want to keep the items
        // around! Do whatever seems right.
        return {
          ...state,
          loading: false,
          error: action.payload.error,
          items: []
        };
  
      default:
        // ALWAYS have a default case in a reducer
        return state;
    }
  }