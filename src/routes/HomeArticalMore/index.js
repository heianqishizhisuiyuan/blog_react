export default (blogUrl) => ({
	path: `${blogUrl}home-artical-more/:id`,
	getComponent(nextState, cb) {
		require.ensure([], (require) => {
			cb(null, require('./component/HomeArticalMore'))
		})
	}
})
