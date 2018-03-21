export  default () => ({
    path: '/componentlist',
    getComponent(nextState, cb) {
      require.ensure([], (require) => {
        cb(null, require('./component/ComponentList'))
      })
    }
  })

