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
			__memo(() => import('./nodes/1.js'))
		],
		remotes: {
			
		},
		routes: [
			
		],
		prerendered_routes: new Set(["/basecoat-ultra/","/basecoat-ultra/introduction/","/basecoat-ultra/svelte/","/basecoat-ultra/svelte/neumorphism-demo/","/basecoat-ultra/ultra/","/basecoat-ultra/ultra/neumorphism-demo/"]),
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})();
