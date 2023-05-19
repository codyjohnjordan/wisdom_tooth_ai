import axios from 'axios'
const API_URL = import.meta.env.VITE_DEV_URL

export async function postUser(input) {
  const body = JSON.stringify(input)
  const response = await axios.post(API_URL, body).then(data => data.data);
  return response.data;
}
