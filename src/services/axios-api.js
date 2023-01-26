import axios from 'axios';

axios.defaults.baseURL = 'https://pixabay.com/api/';
const API_KEY = '31602439-4265b9cd4b0120b6890195f01';

export async function fetchImges(page, searchQuery) {
  return await axios.get(
    `?q=${searchQuery}&key=${API_KEY}&image_type=photo&orientation=horizontal&safesearch=true&per_page=12&page=${page}`
  );
}
