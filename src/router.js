import React from 'react';
import ProTypes from 'prop-types'
import {Router,hashHistory} from 'dva/router';
import App from './routes/app';

import Admin from './routes/admin'

const blogUrl = '/'
const adminUrl ='/admin/'
const cached = {};

/*function registerModel(app, model) {
  if (!cached[model.namespace]) {
    app.model(model);
    cached[model.namespace] = 1;
  }
}*/
const registerModel = (app, model) => {
  if (!(app._models.filter(m => m.namespace === model.namespace).length === 1)) {
    app.model(model)
  }
}

function RouterConfig({history,app}) {
  const routes = [{
      path: `${blogUrl}`,
      component: App,
      getIndexRoute(nextState, cb) {
        require.ensure([], require => {
          cb(null, {
            component: require('./routes/Home/component/Home')
          })
        }, 'dashboard')
      },
      childRoutes: [
        require('./routes/Home')(blogUrl), //home
        require('./routes/HomeArticalMore')(blogUrl) //文章详细信息
      ]
    },
    {
      path: `${adminUrl}`,
      component: Admin,
      getIndexRoute(nextState, cb) {
        require.ensure([], require => {
          cb(null, {
            component: require('./routes/AdminHome/component/Home')
          })
        })
      },
      childRoutes: [
        require('./routes/AdminHome')(adminUrl), //home
        require('./routes/AdminArticalPublish')(adminUrl), //文章发布
        require('./routes/AdminArticalList')(adminUrl), //文章列表
      ]
    },
    {
      path: '*',
      getComponent(nextState, cb) {
        require.ensure([], (require) => {
          cb(null, require('./routes/NotFound/NotFound'))
        })
      }
    }

  ]


  return (
    <Router history={hashHistory} routes={routes} />
  );
}

export default RouterConfig;
