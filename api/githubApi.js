import axios from 'axios';

const BASE_URL = 'http://localhost:8000/github/api';

const githubApi = {
  clearCache: async () => {
    try {
      await axios.post(`${BASE_URL}/clear-cache/`);
    } catch (error) {
      throw new Error('Error clearing cache', error);
    }
  },
  search: async (query, entityType) => {
    try {
      const response = await axios.post (`${BASE_URL}/search/`, {
          search_type: entityType.toLowerCase(),
          search_text: query,
      });
      return response.data.items;
    } catch (error) {
      throw new Error('Error fetching search results', error);
    }
  },
};

export default githubApi;
