import {querySelectData} from '../services/example'
export default {
  namespace: 'componentList',
  state: {
    selectData: []
  },

  subscriptions: {

  },

  effects: {
    *getSelectData({payload},{call, put}) {
      let data = yield call(querySelectData);
      yield put({
        type: 'querySuccess',
        payload: {
          selectData: data.data.selectData
        }
      })
    }
  },
  reducers: {
    querySuccess(state, action) {
      return {...state, ...action.payload}
    }
  },
};
