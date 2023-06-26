import axios from '@src/apis/axios'

const getAppEssentialData = async () => {
  const res = await axios.get('/api/portal/essentials/')
  return res.data
}

export { getAppEssentialData }
