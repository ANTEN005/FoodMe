import axios from 'axios';
//default object where we have user
//inside we have login function which takes credentials
//use axios to make post request, pass credentials
//finally we have a response from server and get
//response data user object (email and token) if everything is ok
export default {
    user: {
        login: (credentials) =>
         axios.post('/api/auth', {credentials}).then(res => res.data.user)
    }
}