import axios from 'axios'
const API_URL = import.meta.env.VITE_API_URL

export async function postUser(input) {
  const source = axios.CancelToken.source()

  const config = {
    timeout: 20000,
    cancelToken: source.token,
    headers: { 'Content-Type': 'application/json;charset=UTF-8' }
  }

  const body = JSON.stringify({ user: input })

  try {
    const response = await axios.post(API_URL, body, config).then(data => data.data)
    return { type: 'answer', content: response.data }
  } catch (error) {
    return { type: 'answer', content: 'Some error has occurred' }
  }
}
