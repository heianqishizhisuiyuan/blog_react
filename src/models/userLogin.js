import {query} from '../services/example'
import {message} from 'antd'
import tools from '../utils/tools'
import {routerRedux} from 'dva/router'
import { parse} from 'qs'
export default {

  namespace: 'userLogin',

  state: {
    login: false,
  },

  subscriptions: {

  },

  effects: {
    *login({payload}, {call, put}){
    let { username, password} = payload.param
     const{ data }= yield call(query, parse(payload))
      if(data.success){
        tools.setCookie('username', payload.param.username)
        yield put(routerRedux.push('/'))
      }else{
        message.error('登陆失败')
      }
   }
  },
  reducers: {
    loginSuccess(state,action) {
      return {...state, ...action.payload}
    },
  },
};
