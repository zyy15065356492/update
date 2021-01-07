import request from '../utils/request/request'
import {apidatas} from './apidata'

export function scoreList(query) {
    return request({
      url: 'APPAPI_NEW/JPTQ_OperationOverview_List',
      method: 'get',
      params: query
    })

  }