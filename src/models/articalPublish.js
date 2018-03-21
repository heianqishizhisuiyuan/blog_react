import {publish,queryMoreArtical,update} from '../services/example'
import { parse} from 'qs'
import { message } from 'antd'

export default {
	namespace: 'articalPublish',
	state: {
    list:'',
	},

	subscriptions: {

	},

	effects: {
    *publish({payload}, {call, put, select}) {
      let params = payload;
      const {data} = yield call(publish, parse(params))
      if(data.success){
        message.success(data.msg)
      }else{
        message.success(data.err)
      }
    },
    *queryArtical({payload},{call,put,select}) {
      const {data} =yield call(queryMoreArtical,parse(payload))
      yield put({
        type:'querySuccess',
        payload:{
          list:data.list
        }
      })
    },
    *update({payload}, {call, put, select}) {
      let params = payload;
      const {data} = yield call(update, parse(params))
      if(data.success){
        message.success(data.msg)
      }else{
        message.success(data.err)
      }
    },
	},

	reducers: {
    querySuccess(state,action){
      return {...state, ...action.payload}
    }
	}


}
