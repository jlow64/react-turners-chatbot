import axios from 'axios';

//Axios component which creates a request to the Azure site utilising your secret key
export default axios.create({
  baseURL: 'https://webchat.botframework.com',
  headers: {
    Authorization:
      'BotConnector 0mnFPMfAqig.GdxGmu4rPqN9lz9qAlY2Oerz5sD7CpSq8zNGc1EWhWA',
  },
});
