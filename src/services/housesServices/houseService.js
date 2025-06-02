import axios from 'axios';

const apiUrl = process.env.API_URL;

export const getEv = async () => {
  try {
    const response = await axios.get(apiUrl+ `/evs/getall`);
    return response.data;
  } catch (error) {
    console.log('getEv api hatası', error);
    return [];
  }
}


export const getEvDilId = async (dil) => {
  try {
    const url = `${apiUrl}/evs/getall?dil=${dil}`;
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    console.log('getEvmDilId api hatası', error);
    return [];
  }
}




export const getEvById = async (evId) => {
  try {
    const response = await axios.get(`${apiUrl}/evDetails/getlist`, {
      params: {
        EvId: evId
      }
    });
    return response.data;
  } catch (error) {
    console.log('getEvById api hatası', error);
    return null;
  }
}


export const getevDetailDilId = async (evId, dil) => {
  try {
    const url = `${apiUrl}/evDetails/getlist?evId=${evId}&dil=${dil}`;
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    console.log('getevDetailDilId api hatası', error);
    return [];
  }
};


export const getOdaEkServiceDilId = async (evId, dil) => {
  try {
    const url = `${apiUrl}/odaEkServices/getlist?evId=${evId}&dil=${dil}`;
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    console.log('getOdaEkServiceDilId api hatası', error);
    return [];
  }
};


export const getOdaOlanakDilId = async (evId, dil) => {
  try {
    const url = `${apiUrl}/odaOlanaks/getlist?evId=${evId}&dil=${dil}`;
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    console.log('getOdaEkServiceDilId api hatası', error);
    return [];
  }
};



