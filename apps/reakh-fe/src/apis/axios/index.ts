import axios from 'axios-config'

const ReakhAxiosInstance = axios(process.env.NEXT_PUBLIC_API_ROOT)

export default ReakhAxiosInstance
