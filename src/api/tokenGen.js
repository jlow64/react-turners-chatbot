import axios from 'axios';

//Axios component which creates a request to the Azure site utilising your secret key
const API_KEY = process.env.REACT_APP_API_KEY  
console.log(API_KEY);
export default axios.create({
  baseURL: 'https://webchat.botframework.com',
  headers: {
    Authorization:
      'BotConnector ' + API_KEY,
  },
});
