import axios from 'axios';

const apiUrl = process.env.API_URL;


export const getGallaryAnasayfa = async () => {
  try {
    const response = await axios.get(`${apiUrl}/galaries/getlist`);
    return response.data;
  } catch (error) {
    console.log('getGallaryAnasayfa api hatası', error);
    return null;
  }
};


export const getGallaryById = async (evId) => {
    try {
      const response = await axios.get(`${apiUrl}/galaries/getlist`, {
        params: {
          evId 
        }
      });
      return response.data;
    } catch (error) {
      console.log('getGallaryById api hatası', error);
      return null;
    }
  };


  // GALLARY BLOG 

  export const getGallaryBlogById = async (blogId) => {
    try {
      const response = await axios.get(`${apiUrl}/galaryBlogs/getlist`, {
        params: {
          blogId 
        }
      });
      return response.data;
    } catch (error) {
      console.log('getGallgetGallaryBlogByIdaryById api hatası', error);
      return null;
    }
  };