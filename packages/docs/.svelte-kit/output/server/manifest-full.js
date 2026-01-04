export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "basecoat-ultra/_app",
	assets: new Set([".nojekyll",".well-known/appspecific/com.chrome.devtools.json","favicon.svg"]),
	mimeTypes: {".json":"application/json",".svg":"image/svg+xml"},
	_: {
		client: {start:"_app/immutable/entry/start.DJQ1fFcO.js",app:"_app/immutable/entry/app.Cqjtl_92.js",imports:["_app/immutable/entry/start.DJQ1fFcO.js","_app/immutable/chunks/CAHpiByC.js","_app/immutable/chunks/CcB7mu8M.js","_app/immutable/chunks/BV0ojOEu.js","_app/immutable/chunks/3YNn07iF.js","_app/immutable/entry/app.Cqjtl_92.js","_app/immutable/chunks/PPVm8Dsz.js","_app/immutable/chunks/CcB7mu8M.js","_app/immutable/chunks/BJ5oJuY2.js","_app/immutable/chunks/LLbtFBfO.js","_app/immutable/chunks/DT3QW2lX.js","_app/immutable/chunks/xC2C8d09.js","_app/immutable/chunks/3YNn07iF.js","_app/immutable/chunks/DYFNfnGJ.js","_app/immutable/chunks/Ch78oinL.js","_app/immutable/chunks/lD6ovMLn.js","_app/immutable/chunks/DSLby0BA.js"],stylesheets:[],fonts:[],uses_env_dynamic_public:false},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js')),
			__memo(() => import('./nodes/2.js')),
			__memo(() => import('./nodes/3.js')),
			__memo(() => import('./nodes/4.js')),
			__memo(() => import('./nodes/5.js')),
			__memo(() => import('./nodes/6.js')),
			__memo(() => import('./nodes/7.js'))
		],
		remotes: {
			
		},
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			},
			{
				id: "/introduction",
				pattern: /^\/introduction\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 3 },
				endpoint: null
			},
			{
				id: "/svelte",
				pattern: /^\/svelte\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 4 },
				endpoint: null
			},
			{
				id: "/svelte/neumorphism-demo",
				pattern: /^\/svelte\/neumorphism-demo\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 5 },
				endpoint: null
			},
			{
				id: "/ultra",
				pattern: /^\/ultra\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 6 },
				endpoint: null
			},
			{
				id: "/ultra/neumorphism-demo",
				pattern: /^\/ultra\/neumorphism-demo\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 7 },
				endpoint: null
			}
		],
		prerendered_routes: new Set([]),
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})();
