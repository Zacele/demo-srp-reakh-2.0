import axios from 'axios'

const AxiosInstance = (baseURL: string) =>
  axios.create({
    baseURL
  })

export default AxiosInstance
