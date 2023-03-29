import axios from 'axios';

const API_KEY = '28776880-1fc4bbb019fa0e4aa33b54b30';

axios.defaults.baseURL = 'https://pixabay.com/api/';

// export const getSearchedImage = (query, page = 1) => {
//   return axios.get('/', {
//     params: {
//       key: API_KEY,
//       image_type: 'photo',
//       orientation: 'horizontal',
//       per_page: 12,
//     },
//   });
// };

export const fetchImages = async (query, page) => {
  const params = {
    query,
    page,
    key: API_KEY,
    image_type: 'photo',
    orientation: 'horizontal',
    per_page: 12,
  };
  try {
    const response = await axios.get('/', { params });
    return response.data;
  } catch (error) {
    console.error('Error:', error.message);
  }
};
