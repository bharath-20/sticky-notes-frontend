
import api from './api'; 

export const registerUser = async (userData) => {
  try {
    const response = await api.post('/register', userData);
    console.log(response);
    return response.data;
  } catch (error) {
    console.log(error);
    if (error.response) {
      throw error.response.data; 
    } else if (error.request) {
      console.error('No response received:', error.request);
      throw new Error('No response received from the server');
    } else {
      console.error('Request setup error:', error.message);
      throw new Error('Error setting up the request');
    }
  }
};


export const loginUser = async (credentials) => {
  try {
    const response = await api.post('/login', credentials);
    const  jwt  =response.data.user.jwt ;

    localStorage.setItem('jwt', jwt);
    return response.data;
  } catch (error) {
    localStorage.removeItem('jwt');
    throw error.response.data;
  }
};


export const logoutUser = () => {
    localStorage.removeItem('jwt');
  };
