import {queryTable,deleteArtical,queryTableM, editorArtical} from '../services/example'
import { parse} from 'qs'
import { message } from 'antd'

export default {
	namespace: 'articalList',
	state: {
    tableData:[]
	},

	subscriptions: {

	},

	effects: {
    //查询文章列表
    *queryTable({payload}, {call, put, select}) {
      let params = payload;
      const {data} = yield call(queryTable, parse(params))
      yield put({
        type: 'querySuccess',
        payload:{
          tableData:data.list
        }
      })
    },
    //删除单个文章
    *deleteArtical({payload},{call,put,select}) {
      const{data} = yield call(deleteArtical,parse(payload));
      if(data.success){
        const backData = yield put({
          type: 'queryTable'
        })
      }else{
        message.info(data.msg)
      }
    },
    //查询文章列表
    *searchData({payload},{call, put, select}) {
      const {data} = yield call(queryTableM, parse(payload));
      yield put({
        type: 'querySuccess',
        payload:{
          tableData:data.list
        }
      })
    },
    //编辑文章
    *editorArtical({payload},{call, put, select}) {
      const {data} = yield call(editorArtical, parse(payload));
      yield put({
        type: 'querySuccess',
        payload:{
          tableData:data.list
        }
      })
    },

	},


	reducers: {
    querySuccess(state,action){
      return {...state, ...action.payload}
    }
	}


}
