export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set([".nojekyll",".well-known/appspecific/com.chrome.devtools.json","favicon.svg"]),
	mimeTypes: {".json":"application/json",".svg":"image/svg+xml"},
	_: {
		client: {start:"_app/immutable/entry/start.v13OaZbV.js",app:"_app/immutable/entry/app.aH0PsrC8.js",imports:["_app/immutable/entry/start.v13OaZbV.js","_app/immutable/chunks/8nbHsLMH.js","_app/immutable/chunks/BS2-Cwni.js","_app/immutable/chunks/Dr3vZ-qq.js","_app/immutable/entry/app.aH0PsrC8.js","_app/immutable/chunks/PPVm8Dsz.js","_app/immutable/chunks/BS2-Cwni.js","_app/immutable/chunks/Xj0ff58f.js","_app/immutable/chunks/DSIzwGkI.js","_app/immutable/chunks/Bv98Rq3g.js","_app/immutable/chunks/xC2C8d09.js","_app/immutable/chunks/Dr3vZ-qq.js","_app/immutable/chunks/k6G_fMDg.js","_app/immutable/chunks/B1ahk-1M.js","_app/immutable/chunks/CEPX-A89.js","_app/immutable/chunks/CWJMvDCM.js"],stylesheets:[],fonts:[],uses_env_dynamic_public:false},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js'))
		],
		remotes: {
			
		},
		routes: [
			
		],
		prerendered_routes: new Set(["/","/introduction/","/svelte/","/svelte/neumorphism-demo/","/ultra/","/ultra/neumorphism-demo/"]),
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})();
