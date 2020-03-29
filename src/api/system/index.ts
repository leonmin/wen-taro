import request from '../request'
import { host } from '../config'
const BASE_URL = host + '/sys'

export default {
  login (data) {
    return request({
      url: BASE_URL + '/login',
      method: 'GET',
      data: data
    })
  }
}