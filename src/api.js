import axios from 'axios';
//default object where we have user
//inside we have login function which takes credentials
//use axios to make post request, pass credentials
//finally we have a response from server and get
//response data user object (email and token) if everything is ok
export default {
    user: {
        login: (credentials) =>
            axios.post('/api/auth', {credentials}).then(res => res.data.user),
        signup: user =>
            axios.post('/api/users', {user}).then(res=>res.data.user),
    },
    recipe:{ 
        addRecipe: (recipe) =>
            axios.post('/api/addrecipe', {recipe}).then(res => res.data.recipe),
        fetchAll: () => 
            axios.get('/api/recipes/search').then(res => res.data.recipes),
        addToMyRecipes: (recipe) =>
            axios.post('/api/addToMyRecipes', {recipe}).then(res => res.data.recipe),
        fethMyRecipes: () =>
            axios.get('/api/getallrecipes/search').then(res => res.data.recipe)
    }
}