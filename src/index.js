import './index.html';
import './index.css';
import 'babel-polyfill';
import dva from 'dva';
import {browserHistory} from 'dva/router';
import createLoading from 'dva-loading';
import {
	message
} from 'antd';

// 1. Initialize
const app = dva({
	history: browserHistory,
	...createLoading({
		effects: true,
	}),
	onError(e) {
		message.error(e.message);
	},
});
// 2. Plugins
app.use(createLoading());

// 3. Model
app.model(require('./models/app'));
app.model(require('./models/home'));
app.model(require('./models/articalPublish'));  //文章发布
app.model(require('./models/articalList'));  //文章列表
app.model(require('./models/homeArticalMore'));  // 文章详情
	//app.model(require('./models/userLogin'));
	//app.model(require('./models/componentList'));

// 4. Router
app.router(require('./router'));

// 5. Start
app.start('#root');
