export const get20IssuesQueryResult = {
	repository: {
		issues: {
			nodes: [
				{
					number: 21352,
					body:
						"React version: 16.13.1\nSteps To Reproduce\n\nCall setState in an asynchronous function after await, or in a .then() function on a promise.\n\n\nLink to code example: https://codesandbox.io/s/friendly-ganguly-gsl6c?file=/src/App.js\n\nCode example\nconst SynchronousRerender: FunctionComponent = () => {\n  const [value, setValue] = useState(0);\n  console.log('I am rendering with value = ', value);\n\n  useEffect(() => {\n    Promise.resolve().then(() => {\n      console.log('Use effect 1');\n      setValue(1);\n      console.log('Use effect 2');\n      setValue(2);\n      console.log('Use effect 3');\n      setValue(3);\n      console.log('Use effect done');\n    });\n  }, []);\n\n  return <>{value}</>;\n};\nThe current behavior\nCalling setState will synchronously re-rendener the component - the component function will be called with the new state before setState even returns. The code example prints:\nI am rendering with value =  0\nUse effect 1\nI am rendering with value =  1\nUse effect 2\nI am rendering with value =  2\nUse effect 3\nI am rendering with value =  3\nUse effect done\n\nThe expected behavior\nThe new state should be queued for an update and then processed afterwards, preferably the same way as if it wasn't in a .then() promise function: all the state changes get evaluated, and then the component is re-rendered only once. The code example should print:\nI am rendering with value =  0\nUse effect 1\nUse effect 2\nUse effect 3\nUse effect done\nI am rendering with value =  3",
					title:
						'Bug: setState re-renders the component synchronously when called in a promise',
					state: 'CLOSED',
					labels: {
						nodes: [
							{
								name: 'Resolution: Expected Behavior',
								color: '8c98d8',
								__typename: 'Label',
							},
							{
								name: 'Status: Unconfirmed',
								color: 'd4c5f9',
								__typename: 'Label',
							},
						],
						__typename: 'LabelConnection',
					},
					__typename: 'Issue',
				},
				{
					number: 21350,
					body:
						'就是我使用多层context.Provider 包裹的组件的子组件如果都是用了memo进行包装，那么是否渲染的高亮将不再有用\n\nTranslated: That is, if the sub-components of the components that I use multi-layer context.Provider package are all packaged with memo, then the highlight of whether the rendering will no longer be useful\n<context1.Provider>\n  <context2.Provider>\n    <A />\n  </context2.Provider>\n</context1.Provider>;\n\nconst A = memo(() => {\n  rerurn(\n    <>\n      <B />\n      <C />\n    </>\n  );\n});\n\nconst B = memo(() => {...});\nconst C = memo(() => {...});\n\n类似这样的写法，工具中的渲染高亮 将没有效果了\n\nTranslated: Writing like this, the rendering highlight in the tool will have no effect\nEdited by @bvaughn for formatting and to add translations.',
					title:
						'Bug: Combining Context.Provider and React.memo prevent updates',
					state: 'OPEN',
					labels: {
						nodes: [
							{
								name: 'Resolution: Needs More Information',
								color: 'fffde7',
								__typename: 'Label',
							},
							{
								name: 'Status: Unconfirmed',
								color: 'd4c5f9',
								__typename: 'Label',
							},
						],
						__typename: 'LabelConnection',
					},
					__typename: 'Issue',
				},
				{
					number: 21349,
					body:
						'On chrome of windows, controlled input changes the value in onChange, and enter(IME mode) non-letters(#/$/%/...) will trigger onChange twice\n\n\nReact version: 17.0.2 (16 will also)\nwindows 10\nchrome 90.0.4430.85\n\nSteps To Reproduce\n\nThe input method is adjusted to Chinese (IME)\nEnter non-letter special symbols , such as # $ % - =\n\n\nLink to code example:\nhttps://codesandbox.io/s/bold-morning-8x46e\n\nThe current behavior\nonChange call twice\nThe expected behavior\nonChange call correct times',
					title:
						'Bug: In a specific environment, controlled input triggers onChange twice',
					state: 'OPEN',
					labels: {
						nodes: [
							{
								name: 'Component: DOM',
								color: 'fef2c0',
								__typename: 'Label',
							},
							{
								name: 'Type: Bug',
								color: 'b60205',
								__typename: 'Label',
							},
						],
						__typename: 'LabelConnection',
					},
					__typename: 'Issue',
				},
				{
					number: 21348,
					body:
						"React version: 17.0.2\nBrowser: Edge\nSteps To Reproduce\n\nOpen the project in the sunny day\nNothing can run normally\nUninstall React Devtools\nReinstall React Devtools\nUninstall React Devtools again\n\nI don't know why but my React project (CRA) cannot run without React Devtools in development mode",
					title: 'Bug: Cannot run the project without React devtools',
					state: 'CLOSED',
					labels: {
						nodes: [
							{
								name: 'Status: Unconfirmed',
								color: 'd4c5f9',
								__typename: 'Label',
							},
						],
						__typename: 'LabelConnection',
					},
					__typename: 'Issue',
				},
				{
					number: 21347,
					body: 'edit Accidentally created.',
					title: 'Bug: ',
					state: 'CLOSED',
					labels: {
						nodes: [
							{
								name: 'Status: Unconfirmed',
								color: 'd4c5f9',
								__typename: 'Label',
							},
						],
						__typename: 'LabelConnection',
					},
					__typename: 'Issue',
				},
				{
					number: 21342,
					body:
						"React version:\n17.0.2\neslint-plugin-react-hooks version:\n4.2.0\nSteps To Reproduce\n\nimport useEfect from react library\ntype useEfect(\n\nLink to code example:\nhttps://github.com/LeonardoRick/podcastr\nThe current behavior\n\noutput:\n[Error - 16:40:28] ESLint stack trace:\n[Error - 16:40:28] TypeError: Cannot read property 'type' of undefined\nOccurred while linting D:\\GIT\\podcastr\\src\\Components\\Player\\index.tsx:16\n    at visitCallExpression (D:\\GIT\\podcastr\\node_modules\\eslint-plugin-react-hooks\\cjs\\eslint-plugin-react-hooks.development.js:1736:24)\n    at D:\\GIT\\podcastr\\node_modules\\eslint\\lib\\linter\\safe-emitter.js:45:58\n    at Array.forEach (<anonymous>)\n    at Object.emit (D:\\GIT\\podcastr\\node_modules\\eslint\\lib\\linter\\safe-emitter.js:45:38)\n    at NodeEventGenerator.applySelector (D:\\GIT\\podcastr\\node_modules\\eslint\\lib\\linter\\node-event-generator.js:256:26)\n    at NodeEventGenerator.applySelectors (D:\\GIT\\podcastr\\node_modules\\eslint\\lib\\linter\\node-event-generator.js:285:22)\n    at NodeEventGenerator.enterNode (D:\\GIT\\podcastr\\node_modules\\eslint\\lib\\linter\\node-event-generator.js:299:14)\n    at CodePathAnalyzer.enterNode (D:\\GIT\\podcastr\\node_modules\\eslint\\lib\\linter\\code-path-analysis\\code-path-analyzer.js:711:23)\n    at D:\\GIT\\podcastr\\node_modules\\eslint\\lib\\linter\\linter.js:954:32\n    at Array.forEach (<anonymous>)\nerror line:\n      // eslint-plugin-react-hooks\\cjs\\eslint-plugin-react-hooks.development.js:1736:24:\n      switch (callback.type) {\nThe expected behavior\nNo errors showing, since I'm currently typing the code",
					title:
						"Bug: ESLint: Cannot read property 'type' of undefined Occurred while linting",
					state: 'CLOSED',
					labels: {
						nodes: [
							{
								name: 'Status: Unconfirmed',
								color: 'd4c5f9',
								__typename: 'Label',
							},
						],
						__typename: 'LabelConnection',
					},
					__typename: 'Issue',
				},
				{
					number: 21339,
					body:
						'The tag on GitHub does not match the version of the package:\nhttps://github.com/facebook/react/blob/v16.14.0/packages/react-test-renderer/package.json\nThis is v16.14.0, but the package is of version 17.0.0-alpha.0.',
					title: 'Bug: v16.14.0 tag is incorrectly shows',
					state: 'CLOSED',
					labels: {
						nodes: [
							{
								name: 'Status: Unconfirmed',
								color: 'd4c5f9',
								__typename: 'Label',
							},
						],
						__typename: 'LabelConnection',
					},
					__typename: 'Issue',
				},
				{
					number: 21332,
					body:
						'React version: DevTools version 4.12.2-d14b6a4bdd\nSteps To Reproduce\n\nUse console.warn from within a React component where the last argument is typeof "symbol"\n\n\nLink to code example: https://codesandbox.io/s/pedantic-neumann-711ph?file=/src/App.js\nThe bug only happens when you make a change, so if you use the code sandbox link you need, open a new window, active dev tools, open the React dev tools and then uncomment line 5: // return null only then will the error actually happen.\nI\'ve located the culprit to this line of code\n\n  \n    \n      react/packages/react-devtools-shared/src/backend/console.js\n    \n    \n        Lines 146 to 147\n      in\n      0e100ed\n    \n    \n    \n    \n\n        \n          \n           const alreadyHasComponentStack = \n        \n\n        \n          \n             lastArg !== null && isStringComponentStack(lastArg); \n        \n    \n  \n\n\nAnd would offer the following change\nconst alreadyHasComponentStack = typeof lastArg === "string" && isStringComponentStack(lastArg);\n\n\nThe current behavior\nReact DevTools is implicitly converting a Symbol to a string.\nThe expected behavior\nReact DevTools does not implicitly try to convert a Symbol to a string.',
					title:
						'DevTools does not handle Symbol values logged to cosole.warn/console.error',
					state: 'OPEN',
					labels: {
						nodes: [
							{
								name: 'Component: Developer Tools',
								color: 'fbca04',
								__typename: 'Label',
							},
							{
								name: 'Status: Unconfirmed',
								color: 'd4c5f9',
								__typename: 'Label',
							},
							{
								name: 'Type: Bug',
								color: 'b60205',
								__typename: 'Label',
							},
						],
						__typename: 'LabelConnection',
					},
					__typename: 'Issue',
				},
				{
					number: 21329,
					body:
						"Right now the only hook for consuming a React context is useContext, which is great for most cases. However, one downside is that it results in a component re-rendering whether or not the context itself is directly used for displaying something. Take the following example:\nexport const ExpensiveComponent = React.memo(function ExpensiveComponent() {\n  const myContext = useContext(MyContext);\n\n  const onClick = useCallback(() => {\n    doThing(myContext);\n  }, [myContext]);\n\n  // lots of other hooks\n\n  return (\n    <div>\n      <button onClick={onClick}>Click Me</button>\n      {/* ...other children... */}\n    </div>\n  );\n});\nHere the value of MyContext is only used when onClick is called, it is not used by any returned DOM elements or child components. However, if the value of myContext changes, ExpensiveComponent will re-render despite no differences in what is being displayed.\nOne way to prevent this component from over re-rendering would be to provide a hook along the lines of useContextGetter. It would prevent  ExpensiveComponent from re-rendering by returning a getter function for MyContext that would allow onClick to lazily access the current context's value. This getter would be a stable function similar to the callback useState returns.\nHere's the above example rewritten to use useContextGetter:\nexport const ExpensiveComponent = React.memo(function ExpensiveComponent() {\n  const getMyContext = useContextGetter(MyContext);\n\n  const onClick = useCallback(() => {\n    doThing(getMyContext());\n  }, [getMyContext]);\n\n  // lots of other hooks\n\n  return (\n    <div>\n      <button onClick={onClick}>Click Me</button>\n      {/* ...other children... */}\n    </div>\n  );\n});\nThere is some prior art for an API similar to this with Recoil's useRecoilCallback making it possible to access Recoil state inside of a callback without requiring a component to re-render when the state changes. One could also construct similar functionality with React Redux's useStore and calling getState() on the store inside of a callback.\nThe above examples I used are pretty trivial and one could simply refactor the part that uses MyContext into a separate child component to avoid re-rendering ExpensiveComponent. However, its not difficult to imagine a scenario where such a refactor may be challenging or a component being used in enough places that the re-render causes performance degradation.",
					title: 'Feature request: useContextGetter',
					state: 'OPEN',
					labels: {
						nodes: [
							{
								name: 'Status: Unconfirmed',
								color: 'd4c5f9',
								__typename: 'Label',
							},
						],
						__typename: 'LabelConnection',
					},
					__typename: 'Issue',
				},
				{
					number: 21328,
					body:
						'React version: 16.14.0\neslint-plugin-react-hooks version: 4.2.0\neslint version: 7.24.0\n@typescript-eslint/parser version: 4.17.0\n@babel/eslint-parser version: 7.13.4\nA false positive from rules-of-hooks, specifically the "called conditionally" report, cropped up in a codebase I work on this week. It was a very strange scenario where modifying portions of arbitrary logical expressions/operators would change which hooks were reported, or make the lint start passing altogether (when nothing about the structure of hooks had changed).\nI drilled into it and diagnosed it as an overflow in the lint rule\'s path counting logic. Please find an isolated reproduction and brief writeup in this repository: https://github.com/camhux/eslint-react-hook-false-positive\nSteps To Reproduce\n\nClone https://github.com/camhux/eslint-react-hook-false-positive.\nRun yarn repro.\n\n\nLink to code example: https://github.com/camhux/eslint-react-hook-false-positive/blob/main/repro.tsx\n\nThe current behavior\nThe useEffect hook on repro.tsx:7 is flagged by rules-of-hooks as being called conditionally.\nThe expected behavior\nNo errors are raised by the rules-of-hooks rule for repro.tsx.',
					title:
						'Bug: ESLint react-hooks/rules-of-hooks false positives when codepath counts exceed Number.MAX_SAFE_INTEGER',
					state: 'OPEN',
					labels: {
						nodes: [
							{
								name: 'Component: ESLint Rules',
								color: 'f7afdb',
								__typename: 'Label',
							},
							{
								name: 'Status: Unconfirmed',
								color: 'd4c5f9',
								__typename: 'Label',
							},
							{
								name: 'Type: Bug',
								color: 'b60205',
								__typename: 'Label',
							},
						],
						__typename: 'LabelConnection',
					},
					__typename: 'Issue',
				},
				{
					number: 21326,
					body:
						'DevTools packages are published to NPM and follow semver for their public APIs (e.g. connectToDevTools from react-devtools-core). However the protocol used to communicate between the "backend" and "frontend" components is unversioned and may change between releases. Normally this does not cause a problem as the browser extensions, react-devtools-inline package, and react-devtools standalone package (used for browsers like Safari) all bundle these components together (e.g. the frontend injects or serves via an embedded web server the backend script so there\'s a 1:1 match).\nHowever, React Native poses a special challenge. The React Native renderer embeds the "backend" component within renderer itself (in DEV mode), but the user launches the "frontend" UI via NPM or a tool like Flipper or the React Native Debugger. In either case, there is no guarantee that the version of the "frontend" UI will match the version of the embedded "backend". (React Native does specify a react-devtools-core dependency but users are often running a globally installed version of the React DevTools or Flipper and so nothing even checks the dependency version.)\nThis means that updates to React Native (or more specifically, updates to the embedded DevTools backend) can cause DevTools installations to stop working without an apparent reason or an obvious solution.\nOne way to address this would be to add a protocol version to the initialization messages exchanged between the frontend and the backend. It might be too much effort for the frontend to support multiple versions of the backend, but perhaps it could at least show the user a message (e.g. "Version 3 protocol is used. react-devtools version 4.8-4.12 required.")\n\n #21331: Add protocol to frontend and backend.\n Cherry pick change onto 4.10 and add an upgrade prompt.',
					title:
						'DevTools: Add version to protocol used between backend/frontend',
					state: 'OPEN',
					labels: {
						nodes: [
							{
								name: 'Component: Developer Tools',
								color: 'fbca04',
								__typename: 'Label',
							},
						],
						__typename: 'LabelConnection',
					},
					__typename: 'Issue',
				},
				{
					number: 21321,
					body:
						'Describe what you were doing when the bug occurred:\n1.\n2.\n3.\n\nPlease do not remove the text below this line\nDevTools version: 4.12.3-8f202a7c8d\nComponent stack: List@moz-extension://d7e5d713-e002-4ecc-9f7e-2f81502878f8/build/main.js:23907:30\ndiv\nAutoSizer@moz-extension://d7e5d713-e002-4ecc-9f7e-2f81502878f8/build/main.js:3140:19\ndiv\ndiv\nTree_Tree@moz-extension://d7e5d713-e002-4ecc-9f7e-2f81502878f8/build/main.js:29857:47\ndiv\ndiv\nOwnersListContextController@moz-extension://d7e5d713-e002-4ecc-9f7e-2f81502878f8/build/main.js:29005:37\nSettingsModalContextController@moz-extension://d7e5d713-e002-4ecc-9f7e-2f81502878f8/build/main.js:29446:40\nComponents_Components@moz-extension://d7e5d713-e002-4ecc-9f7e-2f81502878f8/build/main.js:37593:52\nErrorBoundary_ErrorBoundary@moz-extension://d7e5d713-e002-4ecc-9f7e-2f81502878f8/build/main.js:33093:5\nPortaledContent@moz-extension://d7e5d713-e002-4ecc-9f7e-2f81502878f8/build/main.js:33172:34\ndiv\ndiv\nProfilerContextController@moz-extension://d7e5d713-e002-4ecc-9f7e-2f81502878f8/build/main.js:37211:35\nTreeContextController@moz-extension://d7e5d713-e002-4ecc-9f7e-2f81502878f8/build/main.js:25674:31\nSettingsContextController@moz-extension://d7e5d713-e002-4ecc-9f7e-2f81502878f8/build/main.js:26288:35\nModalDialogContextController@moz-extension://d7e5d713-e002-4ecc-9f7e-2f81502878f8/build/main.js:33315:38\nDevTools_DevTools@moz-extension://d7e5d713-e002-4ecc-9f7e-2f81502878f8/build/main.js:40586:27',
					title:
						'Error: "can\'t access property "isCollapsed", child is undefined"',
					state: 'OPEN',
					labels: {
						nodes: [
							{
								name: 'Component: Developer Tools',
								color: 'fbca04',
								__typename: 'Label',
							},
							{
								name: 'Resolution: Needs More Information',
								color: 'fffde7',
								__typename: 'Label',
							},
						],
						__typename: 'LabelConnection',
					},
					__typename: 'Issue',
				},
				{
					number: 21320,
					body:
						'React version:16.11.0\nSteps To Reproduce\n\nThis is the code demo\n\nfunction TestFunctionState() {\n  const [count, setCount] = React.useState(0);\n  const btnRef = React.useRef(null);\n  const eventRef=React.useRef(null);\n  eventRef.current={onClick};\n  React.useEffect(() => {\n    function onProxyClick(e){\n      eventRef.current.onClick(e);\n      console.log(count,111)\n      console.log(\'proxy\');\n    }\n    btnRef.current.addEventListener("click", onClick);\n    btnRef.current.addEventListener("click", onProxyClick);\n  }, []);\n  function onClick() {\n    console.log(count);\n  }\n  function handleClick(){\n    setCount(count+1)\n  }\n  return (\n    <div>\n      <p>useState api</p>\n      <p>\n        <button ref={btnRef}>打印count</button>\n        Count: {count} <button onClick={handleClick}>自增</button>\n      </p>\n    </div>\n  );\n}\n\nclass App extends React.Component {\n  \n  render() {\n    return (\n      <div className="App">\n        <h1>Hello</h1>\n        <h2>Start editing to see some magic happen!</h2>\n        <TestFunctionState />\n      </div>\n    );\n  }\n}\n\nconst rootElement = document.getElementById("root");\nReactDOM.render(<App />, rootElement);\n\nWhen you run the code demo,you can see the view :\n\n\n3.Click the "self add" button ,then click the "print the count" button ,we can see this content in the console\n\n4.Why i can only access the initial state ,when i add a native event handle callback who is no be stored in ref?But,when i store the event handler in ref,i can access the latest state?What is the difference between callback who is store in ref and callback who is not store in the ref?\n\nLink to code example:  https://codepen.io/yklydxtt/pen/dyNqVbg?editors=1111\n\nThe current behavior\nI can only access the initial state when the onClick callback is running\nThe expected behavior\nI can access the latest state when the onClick callback is running',
					title:
						'Bug: I can always access the initial state in native event callback',
					state: 'OPEN',
					labels: {
						nodes: [
							{
								name: 'Status: Unconfirmed',
								color: 'd4c5f9',
								__typename: 'Label',
							},
						],
						__typename: 'LabelConnection',
					},
					__typename: 'Issue',
				},
				{
					number: 21318,
					body:
						'React version:\nSteps To Reproduce\n1.react16.2\n手机华为p30、荣耀\n在div中绑定onTouchStart、onTouchEnd、onTouchMove事件，在手机上的百度浏览器、自带浏览器等不能拖动，在手机的微信浏览器、qq浏览器可以拖动滑块。\n请问需要在手机端拖动滑块应该怎么做2.\n\nLink to code example:\n\nThe current behavior\nThe expected behavior',
					title: 'Bug: 手机端的touch事件没反应',
					state: 'OPEN',
					labels: {
						nodes: [
							{
								name: 'Resolution: Needs More Information',
								color: 'fffde7',
								__typename: 'Label',
							},
							{
								name: 'Status: Unconfirmed',
								color: 'd4c5f9',
								__typename: 'Label',
							},
						],
						__typename: 'LabelConnection',
					},
					__typename: 'Issue',
				},
				{
					number: 21316,
					body:
						"React version: 0.0.0-experimental-af1a4cbf7\nPretty simple, seems to just be missing entirely. Searching around I don't see any obvious commits or even tweets/notes on this, but the docs on the live site indicate it exists.",
					title:
						"Bug: createBlockingRoot doesn't exist on react-dom@0.0.0-experimental-af1a4cbf7",
					state: 'CLOSED',
					labels: {
						nodes: [
							{
								name: 'Component: Concurrent Mode',
								color: 'ffccd3',
								__typename: 'Label',
							},
							{
								name: 'Status: Unconfirmed',
								color: 'd4c5f9',
								__typename: 'Label',
							},
						],
						__typename: 'LabelConnection',
					},
					__typename: 'Issue',
				},
				{
					number: 21315,
					body:
						"I have react devtools \"installed\" on my chrome account: on the installation page it appears to be installed. However, other developer friends of mine say that I don't have any of the features that are supposed to come with it and that it looks like it's not even installed. Any guidance on this would be appreciated because I don't know what else I can do aside from repeatedly clicking the add/remove button.",
					title: "DevTools doesn't seem to install properly",
					state: 'CLOSED',
					labels: {
						nodes: [],
						__typename: 'LabelConnection',
					},
					__typename: 'Issue',
				},
				{
					number: 21313,
					body:
						'Describe what you were doing when the bug occurred:\n1.\n2.\n3.\n\nPlease do not remove the text below this line\nDevTools version: 4.12.2-d14b6a4bdd\nCall stack: at updateTree (chrome-extension://fmkadmapgofadopljbjfkapdkoienihi/build/main.js:20849:21)\nat getCommitTree (chrome-extension://fmkadmapgofadopljbjfkapdkoienihi/build/main.js:20694:26)\nat ProfilingCache_ProfilingCache.getCommitTree (chrome-extension://fmkadmapgofadopljbjfkapdkoienihi/build/main.js:21268:11)\nat CommitFlamegraphAutoSizer (chrome-extension://fmkadmapgofadopljbjfkapdkoienihi/build/main.js:38408:33)\nat Rh (chrome-extension://fmkadmapgofadopljbjfkapdkoienihi/build/main.js:13414:7)\nat Ci (chrome-extension://fmkadmapgofadopljbjfkapdkoienihi/build/main.js:14115:7)\nat vk (chrome-extension://fmkadmapgofadopljbjfkapdkoienihi/build/main.js:16899:86)\nat uk (chrome-extension://fmkadmapgofadopljbjfkapdkoienihi/build/main.js:16419:11)\nat rk (chrome-extension://fmkadmapgofadopljbjfkapdkoienihi/build/main.js:16411:23)\nat jk (chrome-extension://fmkadmapgofadopljbjfkapdkoienihi/build/main.js:16395:5)\nComponent stack: at CommitFlamegraphAutoSizer (chrome-extension://fmkadmapgofadopljbjfkapdkoienihi/build/main.js:38391:34)\nat div\nat div\nat div\nat SettingsModalContextController (chrome-extension://fmkadmapgofadopljbjfkapdkoienihi/build/main.js:29445:3)\nat Profiler_Profiler (chrome-extension://fmkadmapgofadopljbjfkapdkoienihi/build/main.js:40189:34)\nat ErrorBoundary_ErrorBoundary (chrome-extension://fmkadmapgofadopljbjfkapdkoienihi/build/main.js:33091:5)\nat PortaledContent (chrome-extension://fmkadmapgofadopljbjfkapdkoienihi/build/main.js:33171:5)\nat div\nat div\nat ProfilerContextController (chrome-extension://fmkadmapgofadopljbjfkapdkoienihi/build/main.js:37210:3)\nat TreeContextController (chrome-extension://fmkadmapgofadopljbjfkapdkoienihi/build/main.js:25673:3)\nat SettingsContextController (chrome-extension://fmkadmapgofadopljbjfkapdkoienihi/build/main.js:26287:3)\nat ModalDialogContextController (chrome-extension://fmkadmapgofadopljbjfkapdkoienihi/build/main.js:33314:3)\nat DevTools_DevTools (chrome-extension://fmkadmapgofadopljbjfkapdkoienihi/build/main.js:40585:3)',
					title:
						'Error: "Commit tree does not contain fiber 10903. This is a bug in React DevTools."',
					state: 'CLOSED',
					labels: {
						nodes: [
							{
								name: 'Component: Developer Tools',
								color: 'fbca04',
								__typename: 'Label',
							},
							{
								name: 'Resolution: Duplicate',
								color: 'cccccc',
								__typename: 'Label',
							},
							{
								name: 'Type: Bug',
								color: 'b60205',
								__typename: 'Label',
							},
						],
						__typename: 'LabelConnection',
					},
					__typename: 'Issue',
				},
				{
					number: 21312,
					body:
						"I have created a Server side table component which is quite complex and to manage the interactions with the filters I have used a context provider which encompasses the whole component. During the development on a test project I didn't have any problem, only after building it to make a library with rollup I had some problems, especially this one.\nWhen importing the library in my main project, nothing works because the state of the context retrieved by the children is always empty.\nSearching on internet I have the impression that it is a problem of context conflicts, but trying several solutions nothing works...\nHere is the state of the context in the react dev tools :\n\nand here is the state retrieved by the children:\n\nReact version: 16.12.0\nSteps To Reproduce\n\nYou can find my answer here, the main component being ServerSideTable :  https://github.com/iMinosGFX/react-server-side-table\nI don't know if showing you a particular piece of code will be useful, in my opinion it's a configuration problem because the state is not accessible no matter the child and the action called, but I use useContext in several children (e.g. itemFilter) and the error occurs every time I try to access a state property\n\nLink to code example:\nhttps://github.com/iMinosGFX/react-server-side-table",
					title: 'React Context API in npm library not working',
					state: 'CLOSED',
					labels: {
						nodes: [
							{
								name: 'Status: Unconfirmed',
								color: 'd4c5f9',
								__typename: 'Label',
							},
						],
						__typename: 'LabelConnection',
					},
					__typename: 'Issue',
				},
				{
					number: 21311,
					body:
						'Error: Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:\n\nYou might have mismatching versions of React and the renderer (such as React DOM)\nYou might be breaking the Rules of Hooks\nYou might have more than one copy of React in the same app\nSee https://reactjs.org/link/invalid-hook-call for tips about how to debug and fix this problem.',
					title:
						"Bug: I am getting Invalid hook error. I am a beginner. Looking for some help understanding all the possible causes for this error and how to resolve them. I agree that there is lot of documentation around it. But I am looking f someone could help me understand in Layman's language.",
					state: 'CLOSED',
					labels: {
						nodes: [
							{
								name: 'Resolution: Support Redirect',
								color: '106099',
								__typename: 'Label',
							},
							{
								name: 'Status: Unconfirmed',
								color: 'd4c5f9',
								__typename: 'Label',
							},
						],
						__typename: 'LabelConnection',
					},
					__typename: 'Issue',
				},
				{
					number: 21310,
					body:
						"Describe what you were doing when the bug occurred:\n\nI just created a useCallback function in the context provider.\nhere's the code:\n\nconst [city, setCity] = useState('')\n\nconst pickCity = useCallback(\n  (cityValue = '') => {\n   \tsetCity(cityValue)\n  },\n  [city]\n)\n\nreturn <Ctx.Provider value={{ selectedCity: city, pickCity }}>{children}</Ctx.Provider>\n\nPlease do not remove the text below this line\nDevTools version: 4.11.0-39713716aa\nCall stack: at updateTree (chrome-extension://fmkadmapgofadopljbjfkapdkoienihi/build/main.js:20532:21)\nat getCommitTree (chrome-extension://fmkadmapgofadopljbjfkapdkoienihi/build/main.js:20377:26)\nat ProfilingCache_ProfilingCache.getCommitTree (chrome-extension://fmkadmapgofadopljbjfkapdkoienihi/build/main.js:20951:11)\nat CommitFlamegraphAutoSizer (chrome-extension://fmkadmapgofadopljbjfkapdkoienihi/build/main.js:35462:33)\nat Rh (chrome-extension://fmkadmapgofadopljbjfkapdkoienihi/build/main.js:13245:7)\nat Ci (chrome-extension://fmkadmapgofadopljbjfkapdkoienihi/build/main.js:13944:7)\nat uk (chrome-extension://fmkadmapgofadopljbjfkapdkoienihi/build/main.js:16725:86)\nat tk (chrome-extension://fmkadmapgofadopljbjfkapdkoienihi/build/main.js:16245:11)\nat qk (chrome-extension://fmkadmapgofadopljbjfkapdkoienihi/build/main.js:16237:23)\nat jk (chrome-extension://fmkadmapgofadopljbjfkapdkoienihi/build/main.js:16221:5)\nComponent stack: at CommitFlamegraphAutoSizer (chrome-extension://fmkadmapgofadopljbjfkapdkoienihi/build/main.js:35445:34)\nat div\nat div\nat div\nat SettingsModalContextController (chrome-extension://fmkadmapgofadopljbjfkapdkoienihi/build/main.js:29121:3)\nat Profiler_Profiler (chrome-extension://fmkadmapgofadopljbjfkapdkoienihi/build/main.js:37243:34)\nat ErrorBoundary_ErrorBoundary (chrome-extension://fmkadmapgofadopljbjfkapdkoienihi/build/main.js:30035:5)\nat PortaledContent (chrome-extension://fmkadmapgofadopljbjfkapdkoienihi/build/main.js:30157:5)\nat div\nat div\nat ProfilerContextController (chrome-extension://fmkadmapgofadopljbjfkapdkoienihi/build/main.js:34264:3)\nat TreeContextController (chrome-extension://fmkadmapgofadopljbjfkapdkoienihi/build/main.js:25356:3)\nat SettingsContextController (chrome-extension://fmkadmapgofadopljbjfkapdkoienihi/build/main.js:25963:3)\nat ModalDialogContextController (chrome-extension://fmkadmapgofadopljbjfkapdkoienihi/build/main.js:30300:3)\nat DevTools_DevTools (chrome-extension://fmkadmapgofadopljbjfkapdkoienihi/build/main.js:37639:3)",
					title:
						'Error: "Commit tree does not contain fiber 942. This is a bug in React DevTools."',
					state: 'CLOSED',
					labels: {
						nodes: [
							{
								name: 'Component: Developer Tools',
								color: 'fbca04',
								__typename: 'Label',
							},
							{
								name: 'Resolution: Duplicate',
								color: 'cccccc',
								__typename: 'Label',
							},
							{
								name: 'Type: Bug',
								color: 'b60205',
								__typename: 'Label',
							},
						],
						__typename: 'LabelConnection',
					},
					__typename: 'Issue',
				},
			],
			pageInfo: {
				endCursor: 'Y3Vyc29yOnYyOpK5MjAyMS0wNC0xOFQwMjo1OToxMyswMzowMM4zSsgB',
				__typename: 'PageInfo',
			},
			__typename: 'IssueConnection',
		},
		description:
			'A declarative, efficient, and flexible JavaScript library for building user interfaces.',
		__typename: 'Repository',
	},
};
