import axios from 'axios';
const myApiKey = '52595115-c90df6dee3e8dfc0035bbe5c3';

export function getImagesByQuery(query) {
  return axios
    .get('https://pixabay.com/api/', {
      params: {
        key: myApiKey,
        q: query,
        image_type: 'photo',
        orientation: 'horizontal',
        safesearch: true,
      },
    })
      .then(res => res.data);

}