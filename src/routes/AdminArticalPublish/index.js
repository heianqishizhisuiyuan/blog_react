export default (adminUrl) => ({
	path: `${adminUrl}artical-publish(/:id)`,
	getComponent(nextState, cb) {
		require.ensure([], (require) => {
			cb(null, require('./component/ArticalPublish'))
		})
	}
})
