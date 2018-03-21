import{queryMoreArtical} from '../services/example'
import _ from 'lodash';
import { parse} from 'qs'

export default {
	namespace: 'homeArticalMore',
	state: {
    moreArtical: ''
	},

	subscriptions: {
	},

	effects: {

    *queryMoreArtical({payload},{call, put, select}) {
      const moreArtical = yield call(queryMoreArtical,parse(payload));
      if(!_.isEmpty(moreArtical)){
        yield put({
          type:'querySuccess',
          payload:{
            moreArtical:moreArtical.data.list
          }
        })
      }
    }
	},

	reducers: {
    querySuccess(state,action) {
      return {...state, ...action.payload}
    }
	}


}
