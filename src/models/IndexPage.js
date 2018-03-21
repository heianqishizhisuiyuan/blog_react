import { routerRedux } from 'dva/router'

export default {

  namespace: 'indexPage',

  state: {
    name: 'chao',
    data: '2016-9-6'
  },

  subscriptions: {
    setup({history, dispatch}){
      dispatch({
        type:'test',
        payload: {
          user: '123',
          address: '山东'
        }
      })
    }
  },

  effects: {
    *link({payload}, {call, put}){
      yield put(routerRedux.push('/user'))
    },
    *test({payload},{call, put, select}){
      const name = yield select()
      yield put({
       type: 'save',
       payload: payload
     })
    }
  },

  reducers: {
    save(state, action) {
      return { ...state, ...action.payload };
    },
  },

};
