import request from '@/utils/request'
import Cookies from "js-cookie";


export function getPermission() {
  const token = Cookies.get('token');
    return request({
      url: '/vue/getPermission',
      headers: {'token': token},
      method: 'get',
    })
  }

export function getUser(token){
  // const token = Cookies.get('token');
    return request({
      url: `/vue/getUser/${token}`,
      headers: {'token': token},
      method: 'get',
    })
}