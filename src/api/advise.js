import request from '@/utils/request'
import Cookies from "js-cookie";

export function getTableData(keyword,category,scope) {
    const token = Cookies.get('token');
      return request({
        url: `/vue/advise/getTableData/${keyword}/${category}/${scope}`,
        headers: {'token': token},
        method: 'post',
      })
    }