export default (adminUrl) => ({
	path: `${adminUrl}artical-list`,
	getComponent(nextState, cb) {
		require.ensure([], (require) => {
			cb(null, require('./component/ArticalList'))
		})
	}
})
