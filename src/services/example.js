import request from '../utils/request';
import qs from 'qs'
export async function query(params) {
	return request('/api/login');
}
export async function queryMenu() {
	return request('/api/queryMenu')
}
export async function querySelectData() {
	return request('/api/querySelectData')
}

/*
* 发布文章
* */
export async function publish(params) {
  return request('/admin/artical_save',{
    method: 'POST',
    body:JSON.stringify(params)
  })
}

/*
 * 更新文章
 * */
export async function update(params) {
  return request('/admin/artical_update',{
    method: 'POST',
    body:JSON.stringify(params)
  })
}
/*
 * 获取文章列表
 * */
export async function queryTable(params) {
  return request('/admin/queryTable',{
    method: "POST",
    body:JSON.stringify(params)
  })
}
export async function queryTableM(params) {
  return request('/admin/queryTableM',{
    method: "POST",
    body:JSON.stringify(params)
  })
}
/*
 * 删除文章
 * */
export async function deleteArtical(params) {
  return request('/admin/deleteArtical',{
    method: "POST",
    body:JSON.stringify(params)
  })
}
/*
 * 编辑文章
 * */
export async function editorArtical(params) {
  return request('/admin/editorArtical',{
    method: "POST",
    body:JSON.stringify(params)
  })
}

/*
 *获取主页面信息
 * */
export async function getHome(params){
  return request('/home/getHomeData',{
    method: 'POST',
    body:JSON.stringify(params)
  })
}

/*
 *获取网站信息
 * */
export async function getWebInfo(params){
  return request('/home/getWebInfo')
}
/*
 *设置网站浏览次数增加
 * */
export async function setVistorCount(params){
  return request('/home/setVistorCount')
}
/*
 *获取文章详情页
 * */
export async function queryMoreArtical(params) {
  return request('/home/queryMoreArtical',{
    method: 'POST',
    body:JSON.stringify(params)
  })
}


