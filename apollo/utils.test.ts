import { mergeIssues } from './utils';

const incoming = {
	nodes: [
		{
			number: 23,
			body: 'Here is the screenshot on running error based on iOS platform.',
			title: 'Running Error on iOS',
			state: 'OPEN',
			labels: {
				nodes: [],
				__typename: 'LabelConnection',
			},
			__typename: 'Issue',
		},
		{
			number: 22,
			body: '',
			title: '你好，运行react-native run-ios报错',
			state: 'OPEN',
			labels: {
				nodes: [],
				__typename: 'LabelConnection',
			},
			__typename: 'Issue',
		},
		{
			number: 21,
			body: '',
			title: '每日签到做了吗',
			state: 'OPEN',
			labels: {
				nodes: [],
				__typename: 'LabelConnection',
			},
			__typename: 'Issue',
		},
		{
			number: 20,
			body:
				'Unable to resolve module react/lib/ReactUpdates from /Users/grim/Documents/Work/Fun/ReactNative/Learn/ReactNative_Shopping-master/node_modules/react-native/Libraries/react-native/react-native.js: Unable to find this module in its module map or any of the node_modules directories under /Users/node_modules/react/lib/ReactUpdates and its parent directories\nThis might be related to facebook/react-native#4968\nTo resolve try the following:\n\nClear watchman watches: watchman watch-del-all.\nDelete the node_modules folder: rm -rf node_modules && npm install.\nReset packager cache: rm -fr $TMPDIR/react-* or npm start -- --reset-cache.',
			title: 'iOS跑不起来',
			state: 'OPEN',
			labels: {
				nodes: [],
				__typename: 'LabelConnection',
			},
			__typename: 'Issue',
		},
		{
			number: 19,
			body: '安卓 红米2A 系统4.4.4 运行时白屏',
			title: '安卓运行时白屏',
			state: 'OPEN',
			labels: {
				nodes: [],
				__typename: 'LabelConnection',
			},
			__typename: 'Issue',
		},
		{
			number: 18,
			body:
				// eslint-disable-next-line quotes
				"报错信息：invariant violation:module name prefixes should've been stripped by the native side but wasn't for RCTJSCExecutor",
			title: 'react-native run-ios 报错',
			state: 'OPEN',
			labels: {
				nodes: [],
				__typename: 'LabelConnection',
			},
			__typename: 'Issue',
		},
		{
			number: 17,
			body: '放出链接让人下载吧，看看体验怎么样？',
			title: '放出链接让人下载APK吧',
			state: 'OPEN',
			labels: {
				nodes: [],
				__typename: 'LabelConnection',
			},
			__typename: 'Issue',
		},
		{
			number: 16,
			body: '‘’on‘ is undefined',
			title: 'run-ios报错',
			state: 'OPEN',
			labels: {
				nodes: [],
				__typename: 'LabelConnection',
			},
			__typename: 'Issue',
		},
		{
			number: 15,
			body:
				'运行打开模拟器后，出现如下错误 ；按照给的提示1，2，3操作后还是同样，请问下这事什么原因造成的。',
			title: '运行到模拟器后报错 ，详细错误如下',
			state: 'OPEN',
			labels: {
				nodes: [],
				__typename: 'LabelConnection',
			},
			__typename: 'Issue',
		},
		{
			number: 14,
			body: '服务端有吗？用什么语言开发的？有没有开源?',
			title: '服务端有吗？',
			state: 'OPEN',
			labels: {
				nodes: [],
				__typename: 'LabelConnection',
			},
			__typename: 'Issue',
		},
		{
			number: 13,
			body: 'RCTBundleURLProvider.h下载后打开提示文件缺少',
			title: '提示缺少文件',
			state: 'OPEN',
			labels: {
				nodes: [],
				__typename: 'LabelConnection',
			},
			__typename: 'Issue',
		},
		{
			number: 12,
			body:
				'我运行 react-native run-android\n后 出现如下问题：\nstrict mode does not allow function\n看了下项目 react-native 版本是\n"react-native": "^0.33.0",\n网上查了很多 说是react-native 的版本问题？ 不知道你们碰到过没？',
			title: '帮忙给看看这个是啥问题？',
			state: 'OPEN',
			labels: {
				nodes: [],
				__typename: 'LabelConnection',
			},
			__typename: 'Issue',
		},
		{
			number: 11,
			body: '',
			title: '为什么启动不了呢',
			state: 'CLOSED',
			labels: {
				nodes: [],
				__typename: 'LabelConnection',
			},
			__typename: 'Issue',
		},
	],
};

const existing = {
	nodes: [
		{
			number: 10,
			body: '',
			title: 'ios 闪退啊',
			state: 'OPEN',
			labels: {
				nodes: [],
				__typename: 'LabelConnection',
			},
			__typename: 'Issue',
		},
		{
			number: 9,
			body: '',
			title: '请制作适配Android的版本',
			state: 'OPEN',
			labels: {
				nodes: [],
				__typename: 'LabelConnection',
			},
			__typename: 'Issue',
		},
		{
			number: 8,
			body:
				'Failed to parse SourceMap: http://localhost:8081/index.android.map?platform=android&dev=true&hot=false&minify=false\nindex.android.bundle?platform=android&dev=true&hot=false&minify=false:23817 TaskQueue: Error with task : RNVectorIconsModule not available, did you properly integrate the module?',
			title: 'android 版本的我运行报错。',
			state: 'OPEN',
			labels: {
				nodes: [],
				__typename: 'LabelConnection',
			},
			__typename: 'Issue',
		},
		{
			number: 7,
			body:
				'Failed to parse SourceMap: http://localhost:8081/index.android.map?platform=android&dev=true&hot=false&minify=false\nindex.android.bundle?platform=android&dev=true&hot=false&minify=false:23817 TaskQueue: Error with task : RNVectorIconsModule not available, did you properly integrate the module?',
			title: 'android  version is error',
			state: 'OPEN',
			labels: {
				nodes: [],
				__typename: 'LabelConnection',
			},
			__typename: 'Issue',
		},
		{
			number: 6,
			body:
				'我这边报错，SyntaxError /User/davidcai/github/shopping-react-native/node_modules/react-native-swiper/src/index.js: Unexcepted token(100:5)\n// export default React.createClass({\nexport default class extends Component {\n/**\n\nProps Validation\n@type {Object}\n*/\nstatic propTypes = {\nhorizontal: PropTypes.bool,\n\n在这一行：  static propTypes = {',
			title: 'ios模拟器上报错',
			state: 'CLOSED',
			labels: {
				nodes: [],
				__typename: 'LabelConnection',
			},
			__typename: 'Issue',
		},
		{
			number: 5,
			body:
				'你这个项目怎么运行呢？怎么打开 ios 文件夹，然后点击xcodeproj 文件打开就是RCTBundleURLProvider.h  file not found的报错，那你这个项目应该怎么运行呢？',
			title: 'RCTBundleURLProvider.h  file not found',
			state: 'CLOSED',
			labels: {
				nodes: [],
				__typename: 'LabelConnection',
			},
			__typename: 'Issue',
		},
		{
			number: 4,
			body:
				'经常simulator运行一会就直接挂掉然后报这个错误，请问有没有解决途径或者有没有也遇到这个问题',
			title: '经常会报错Thread 1：EXC_BAD_ACCESS(code=EXC_I386_GPFLT)',
			state: 'OPEN',
			labels: {
				nodes: [],
				__typename: 'LabelConnection',
			},
			__typename: 'Issue',
		},
	],
};

describe('utils', () => {
	it('should merge issues', () => {
		const result = mergeIssues(existing, incoming);
		expect(result.nodes.length).toBe(20);
	});
});
