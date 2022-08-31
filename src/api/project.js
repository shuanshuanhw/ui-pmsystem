import request from '@/utils/request'
import Cookies from "js-cookie";

export function getTableData(keyword, category, scope, pageNumber, pageSize) {
  const token = Cookies.get('token');
  return request({
    url: `/vue/project/getTableData/${pageNumber}/${pageSize}`,
    headers: { 'token': token },
    method: 'post',
    params: {
      keyword,
      category,
      scope
    },
  })
}
export function getObjectList(projectType, projectTank) {
  const token = Cookies.get('token');
  return request({
    url: `/vue/project/getObjectList/${projectType}/${projectTank}`,
    headers: { 'token': token },
    method: 'post',
    // params: {
    //   keyword,
    //   category,
    //   scope
    // },
  })
}

export function newMainItem(projectName, projectType, projectObjective, projectTank, projectDepartment, projectStartDate, projectEndDate, workMx, introduce, feasibilityAnalyze, innovation) {
  const token = Cookies.get('token');
  return request({
    url: `/vue/project/newMainItem`,
    headers: { 'token': token },
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

export function getItemData(id) {
  const token = Cookies.get('token');
  return request({
    url: `/vue/project/getItemData`,
    headers: { 'token': token },
    method: 'get',
    params: {
      id,
    },
  })
}
export function increaseMoneyMx(id,applyMoney,introduce) {
  const token = Cookies.get('token');
  return request({
    url: `/vue/project/increaseMoneyMx/${id}`,
    headers: { 'token': token },
    method: 'post',
    params: {
      applyMoney,
      introduce
    },
  })
}
export function increaseSingleWorkAdd(id,trueName,workType,workContent)
{
  const token = Cookies.get('token');
  return request({
    url: `/vue/project/increaseSingleWorkAdd/${id}`,
    headers: { 'token': token },
    method: 'post',
    params: {
      trueName,
      workType,
      workContent,
    },
  })
}
export function modifySingleWorkAdd(id,trueName,workType,workContent,projectId)
{
  const token = Cookies.get('token');
  return request({
    url: `/vue/project/modifySingleWorkAdd/${id}`,
    headers: { 'token': token },
    method: 'post',
    params: {
      trueName,
      workType,
      workContent,
      projectId
    },
  })
}
export function modifyMoneyMxAdd(id,applyMoney,introduce,projectId)
{
  const token = Cookies.get('token');
  return request({
    url: `/vue/project/modifyMoneyMxAdd/${id}`,
    headers: { 'token': token },
    method: 'post',
    params: {
      applyMoney,
      introduce,
      projectId
    },
  })
}
export function cancelConfirm(id,projectId)
{
  const token = Cookies.get('token');
  return request({
    url: `/vue/project/cancelConfirm/${id}`,
    headers: { 'token': token },
    method: 'post',
    params: {
      projectId
    },
  })
}