import axios from 'axios';
const API_URL = 'https://flask-production-4716.up.railway.app/wisdomtoothai';

export async function postUser(input) {
  const source = axios.CancelToken.source();

  const config = {
    timeout: 5000,
    cancelToken: source.token
  };

  const body = JSON.stringify({ user: input });

  try {
    const response = await axios.post(API_URL, body, config).then(data => data.data);
    return { type: 'answer', content: response.data };
  } catch (error) {
    return { type: 'answer', content: 'Some error has occurred' };
  }
}
