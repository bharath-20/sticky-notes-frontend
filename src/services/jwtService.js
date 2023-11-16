import api from "./api";
const jwtToken = localStorage.getItem("jwt");
export const postRequest = async (url, data) => {
  try {
    const response = await api.post(url, data, {
      headers: {
        authorization: `Bearer ${jwtToken}`,
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    });
    return response;
  } catch (error) {
    console.error('Error in postRequest:', error);
    throw error; 
  }
};

export const getRequest = async (url) => {
  try {
    const response = await api.get(url, {
      headers: {
        authorization: `Bearer ${jwtToken}`,
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    });
    return response;
  } catch (error) {
    console.error('Error in getRequest:', error);
    throw error; 
  }
};

export const patchRequest = async (url, data) => {
  try {
    const response = await api.patch(url, data, {
      headers: {
        authorization: `Bearer ${jwtToken}`,
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    });
    return response;
  } catch (error) {
    console.error('Error in patchRequest:', error);
    throw error; 
  }
};
export const deleteRequest = async (url) => {
  try {
    const response = await api.delete(url, {
      headers: {
        authorization: `Bearer ${jwtToken}`,
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    });
    return response;
  } catch (error) {
    console.error('Error in deleteRequest:', error);
    throw error; 
  }
};
