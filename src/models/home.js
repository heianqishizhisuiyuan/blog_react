import{getHome} from '../services/example'
import _ from 'lodash'
import {parse} from'qs'

export default {
	namespace: 'home',
	state: {
    homeData: [],
    limit: 5,
    lastId_:''
	},

	subscriptions: {
  /*  setup({history, dispatch}){
      dispatch({
        type:'getHomeData'
      })
    }*/
	},

	effects: {
    *getHomeData({payload},{call, put, select}) {
      let dataSouce=yield select(({home})=> {return home.homeData})
      const homeData = yield call(getHome,parse(payload))
      if(!_.isEmpty(homeData)){
        yield put({
          type:'querySuccess',
          payload:{
            homeData:_.concat(dataSouce,homeData.data.list),
            limit:5,
            lastId_:_.last(homeData.data.list)._id
          }
        })
      }
    },

	},

	reducers: {
    querySuccess(state,action) {
      return {...state, ...action.payload}
    },

	}


}
