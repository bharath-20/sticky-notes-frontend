import { getRequest , postRequest ,patchRequest, deleteRequest} from './jwtService';
export const getNotes = async () => {
  try {
    const response = await getRequest('/Notes');
    console.log('Success:', response.data);
    return response.data;
  } catch (error) {
    console.error('Error in getNotes:', error);
    throw error.response.data;
  }
};
export const postNote = async ( payload ) => {
    try{
        console.log("payload: ", payload);
        const response =await postRequest('/Notes', payload );
        console.log("post req: ", response);
        return response;
    }catch (error) {
        throw error.response.data;
      }
};

export const updateNote = async ( id , payload ) => {
  try{
      const response =await patchRequest(`/Notes/${id}`, payload );
      console.log("post req: ", response);
      return response;
  }catch (error) {
      throw error.response.data;
    }
};


export const deleteNote = async (id) => {
    try {
      await deleteRequest(`Notes/${id}`);
      console.log(`Note with ID ${id} deleted successfully`);
    } catch (error) {
      console.error('Error deleting note:', error);
      throw error.response.data;
    }
  };