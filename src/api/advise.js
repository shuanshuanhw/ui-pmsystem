import request from '@/utils/request'
import Cookies from "js-cookie";

export function getTableData(keyword,category,scope,pageNumber,pageSize) {
    const token = Cookies.get('token');
      return request({
        url: `/vue/advise/getTableData/${pageNumber}/${pageSize}`,
        headers: {'token': token},
        method: 'post',
        params: {
          keyword,
          category,
          scope
        },
      })
    }

export function newMainItem(adviseName,introduce,feasibilityAnalyze,innovation)
{
  const token = Cookies.get('token');
  return request({
    url: `/vue/advise/newMainItem`,
    headers: {'token': token},
    method: 'post',
    params: {
      adviseName,
      introduce,
      feasibilityAnalyze,
      innovation
    },
  })
}