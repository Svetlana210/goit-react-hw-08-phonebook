import axios from 'axios';

const authInstance = axios.create({
  baseURL: 'https://connections-api.herokuapp.com',
  //   baseURL: 'https://auth-backend-lesson.herokuapp.com/api/',
});

export const signup = data => {
  return authInstance.post('/users/signup', data);
};
