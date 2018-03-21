export default (blogUrl) => ({
	path: `${blogUrl}home`,
	getComponent(nextState, cb) {
		require.ensure([], (require) => {
			cb(null, require('./component/Home'))
		})
	}
})
