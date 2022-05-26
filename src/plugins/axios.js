// axios
import axios from 'axios'

const axiosIns = axios.create({
  // You can add your headers here
  // ================================
  baseURL: 'http://a792-185-138-122-18.ngrok.io/api/',

  // timeout: 1000,
  headers: {
    // rejectUnauthorized: 'false',
    // 'Access-Control-Allow-Origin': '*',
    // 'X-Requested-With': 'XMLHttpRequest',
    'Content-Type': 'application/json',
    'X-Custom-Header': 'foobar',
  },
})
export default axiosIns
