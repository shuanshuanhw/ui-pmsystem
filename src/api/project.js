import request from '@/utils/request'
import Cookies from "js-cookie";

export function getTableData(keyword,category,scope,pageNumber,pageSize) {
    const token = Cookies.get('token');
      return request({
        url: `/vue/project/getTableData/${pageNumber}/${pageSize}`,
        headers: {'token': token},
        method: 'post',
        params: {
          keyword,
          category,
          scope
        },
      })
    }
export function getObjectList(projectType,projectTank)
{
  const token = Cookies.get('token');
  return request({
    url: `/vue/project/getObjectList/${projectType}/${projectTank}`,
    headers: {'token': token},
    method: 'post',
    // params: {
    //   keyword,
    //   category,
    //   scope
    // },
  })
}

export function newMainItem(projectName,projectType,projectObjective,projectTank,projectDepartment,projectStartDate,projectEndDate,workMx,introduce,feasibilityAnalyze,innovation)
{
  const token = Cookies.get('token');
  return request({
    url: `/vue/project/newMainItem`,
    headers: {'token': token},
    method: 'post',
    params: {
      projectName,
      projectType,
      projectObjective,
      projectTank,
      projectDepartment,
      projectStartDate,
      projectEndDate,
      workMx,
      introduce,
      feasibilityAnalyze,
      innovation
    },
  })
}

export function getItemData(id)
{
  const token = Cookies.get('token');
  return request({
    url: `/vue/project/getItemData`,
    headers: {'token': token},
    method: 'get',
    params: {
      id,
    },
  })
}