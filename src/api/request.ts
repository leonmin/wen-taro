import Taro from '@tarojs/taro'

interface TResponse {
  statusCode: 200 | 401 | 500 | 'ERROR'
  data?: any
  message?: any
}

const fetch = (options: Taro.request.Option) => {
  const { url, data, method = 'GET' } = options
  const token = Taro.getStorageSync('token')
  const header = token ? { 'Authorization': token} : {}

  if (method === 'POST') {
    header['content-type'] = 'application/json'
  }

  return Taro.request({
    url,
    method,
    data: data,
    header
  }).then(res => {
    if (res && res.statusCode === 401) {
      // 401
      // Taro.navigateTo({ url: '/pages/index/login' })
    } else if (res && res.statusCode === 200) {
      return res.data as TResponse
    }

    return {
      statusCode: 'ERROR',
      message: res
    } as TResponse
  }).catch(err => {
    return Promise.reject({
      message: 'request err',
      ...err
    })
  })
}

export default fetch