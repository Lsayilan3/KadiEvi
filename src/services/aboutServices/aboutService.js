import axios from 'axios';

const apiUrl = process.env.API_URL;

export const getGirisAbout = async () => {
  try {
    const response = await axios.get(apiUrl+ `/girises/getall`);
    return response.data;
  } catch (error) {
    console.log('getGirisAbout api hatası', error);
    return [];
  }
}


export const getGirisAboutDilId = async (dil) => {
  try {
    const url = `${apiUrl}/girises/getall?dil=${dil}`;
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    // Hata mesajını ve yanıtı logla
    console.log('getGirisAboutDilId api hatası', error.message);
    if (error.response) {
      console.log('API Hata Yanıtı:', error.response);
    }
    return [];
  }
};
