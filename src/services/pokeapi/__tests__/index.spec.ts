import axios from 'axios';
import pokeService from '../index';

describe('API Calls', () => {
  it('calls the api and returns ditto', async () => {
    try {
      const response = await axios.get('https://pokeapi.co/api/v2/pokemon/ditto');
      const results = response.data;
      console.log(JSON.stringify(results));
    } catch (e) {
      console.log(JSON.stringify(e));
    }
  });
});
