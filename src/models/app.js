import {
  routerRedux
} from 'dva/router'
import {
  setVistorCount
} from '../services/example'
import tools from '../utils/tools'
import {
  parse
} from 'qs'
import _ from 'lodash';


export default {

  namespace: 'app',

  state: {
    username: '',
    dataMenu: null
  },

  subscriptions: {
    setup({
      dispatch,
      history
    }) {

    },
  },

  effects: {
    *setVistorCount({payload},{call,put,select}){
      const {data} = yield call(setVistorCount)
      if(data.success){
        tools.setCookie('vistorCount', data.vistorCount)
      }
    }
  },

  reducers: {

  },

};
