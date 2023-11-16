import { getRequest } from "./jwtService";

export const getPublicFeed = async () => {
    try {
      const response = await getRequest('/feed');
      console.log('Success:', response.data);
      return response.data;
    } catch (error) {
      console.error('Error in getNotes:', error);
      throw error.response.data;
    }
  };