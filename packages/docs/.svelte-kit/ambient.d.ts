
// this file is generated — do not edit it


/// <reference types="@sveltejs/kit" />

/**
 * Environment variables [loaded by Vite](https://vitejs.dev/guide/env-and-mode.html#env-files) from `.env` files and `process.env`. Like [`$env/dynamic/private`](https://svelte.dev/docs/kit/$env-dynamic-private), this module cannot be imported into client-side code. This module only includes variables that _do not_ begin with [`config.kit.env.publicPrefix`](https://svelte.dev/docs/kit/configuration#env) _and do_ start with [`config.kit.env.privatePrefix`](https://svelte.dev/docs/kit/configuration#env) (if configured).
 * 
 * _Unlike_ [`$env/dynamic/private`](https://svelte.dev/docs/kit/$env-dynamic-private), the values exported from this module are statically injected into your bundle at build time, enabling optimisations like dead code elimination.
 * 
 * ```ts
 * import { API_KEY } from '$env/static/private';
 * ```
 * 
 * Note that all environment variables referenced in your code should be declared (for example in an `.env` file), even if they don't have a value until the app is deployed:
 * 
 * ```
 * MY_FEATURE_FLAG=""
 * ```
 * 
 * You can override `.env` values from the command line like so:
 * 
 * ```sh
 * MY_FEATURE_FLAG="enabled" npm run dev
 * ```
 */
declare module '$env/static/private' {
	export const SHELL: string;
	export const npm_command: string;
	export const USER_ZDOTDIR: string;
	export const WAYFIRE_SOCKET: string;
	export const COLORTERM: string;
	export const TERM_PROGRAM_VERSION: string;
	export const CLUTTER_BACKEND: string;
	export const QT_IM_MODULES: string;
	export const _P9K_TTY: string;
	export const NODE: string;
	export const XDG_DATA_HOME: string;
	export const P9K_TTY: string;
	export const XDG_CONFIG_HOME: string;
	export const npm_config_local_prefix: string;
	export const XMODIFIERS: string;
	export const ELECTRON_OZONE_PLATFORM_HINT: string;
	export const BUN_INSTALL_GLOBAL_DIR: string;
	export const NO_AT_BRIDGE: string;
	export const XCURSOR_SIZE: string;
	export const EDITOR: string;
	export const GOBIN: string;
	export const XDG_SEAT: string;
	export const PWD: string;
	export const LOGNAME: string;
	export const XDG_SESSION_TYPE: string;
	export const _: string;
	export const VSCODE_GIT_ASKPASS_NODE: string;
	export const MOTD_SHOWN: string;
	export const VSCODE_INJECTION: string;
	export const HOME: string;
	export const LANG: string;
	export const _JAVA_AWT_WM_NONREPARENTING: string;
	export const XDG_CURRENT_DESKTOP: string;
	export const CARGO_HOME: string;
	export const RUSTUP_TOOLCHAIN: string;
	export const npm_package_version: string;
	export const WAYLAND_DISPLAY: string;
	export const __MISE_DIFF: string;
	export const GIT_ASKPASS: string;
	export const GDK_DEBUG: string;
	export const GOROOT: string;
	export const CHROME_DESKTOP: string;
	export const __MISE_ORIG_PATH: string;
	export const XDG_CACHE_HOME: string;
	export const npm_lifecycle_script: string;
	export const VSCODE_GIT_ASKPASS_EXTRA_ARGS: string;
	export const SDL_IM_MODULE: string;
	export const TERM: string;
	export const npm_package_name: string;
	export const RUSTUP_HOME: string;
	export const ZDOTDIR: string;
	export const USER: string;
	export const SDL_VIDEODRIVER: string;
	export const VSCODE_GIT_IPC_HANDLE: string;
	export const __MISE_SESSION: string;
	export const DISPLAY: string;
	export const npm_lifecycle_event: string;
	export const SHLVL: string;
	export const MOZ_ENABLE_WAYLAND: string;
	export const QT_IM_MODULE: string;
	export const _P9K_SSH_TTY: string;
	export const XDG_VTNR: string;
	export const XDG_SESSION_ID: string;
	export const npm_config_user_agent: string;
	export const XDG_STATE_HOME: string;
	export const npm_execpath: string;
	export const BUN_INSTALL_BIN: string;
	export const XDG_RUNTIME_DIR: string;
	export const DEBUGINFOD_URLS: string;
	export const npm_package_json: string;
	export const P9K_SSH: string;
	export const VSCODE_GIT_ASKPASS_MAIN: string;
	export const MISE_SHELL: string;
	export const XDG_DATA_DIRS: string;
	export const GDK_BACKEND: string;
	export const BROWSER: string;
	export const PATH: string;
	export const ORIGINAL_XDG_CURRENT_DESKTOP: string;
	export const DBUS_SESSION_BUS_ADDRESS: string;
	export const WAYFIRE_CONFIG_FILE: string;
	export const MAIL: string;
	export const GIO_LAUNCHED_DESKTOP_FILE_PID: string;
	export const npm_node_execpath: string;
	export const GIO_LAUNCHED_DESKTOP_FILE: string;
	export const OLDPWD: string;
	export const TERM_PROGRAM: string;
	export const NODE_ENV: string;
}

/**
 * Similar to [`$env/static/private`](https://svelte.dev/docs/kit/$env-static-private), except that it only includes environment variables that begin with [`config.kit.env.publicPrefix`](https://svelte.dev/docs/kit/configuration#env) (which defaults to `PUBLIC_`), and can therefore safely be exposed to client-side code.
 * 
 * Values are replaced statically at build time.
 * 
 * ```ts
 * import { PUBLIC_BASE_URL } from '$env/static/public';
 * ```
 */
declare module '$env/static/public' {
	
}

/**
 * This module provides access to runtime environment variables, as defined by the platform you're running on. For example if you're using [`adapter-node`](https://github.com/sveltejs/kit/tree/main/packages/adapter-node) (or running [`vite preview`](https://svelte.dev/docs/kit/cli)), this is equivalent to `process.env`. This module only includes variables that _do not_ begin with [`config.kit.env.publicPrefix`](https://svelte.dev/docs/kit/configuration#env) _and do_ start with [`config.kit.env.privatePrefix`](https://svelte.dev/docs/kit/configuration#env) (if configured).
 * 
 * This module cannot be imported into client-side code.
 * 
 * ```ts
 * import { env } from '$env/dynamic/private';
 * console.log(env.DEPLOYMENT_SPECIFIC_VARIABLE);
 * ```
 * 
 * > [!NOTE] In `dev`, `$env/dynamic` always includes environment variables from `.env`. In `prod`, this behavior will depend on your adapter.
 */
declare module '$env/dynamic/private' {
	export const env: {
		SHELL: string;
		npm_command: string;
		USER_ZDOTDIR: string;
		WAYFIRE_SOCKET: string;
		COLORTERM: string;
		TERM_PROGRAM_VERSION: string;
		CLUTTER_BACKEND: string;
		QT_IM_MODULES: string;
		_P9K_TTY: string;
		NODE: string;
		XDG_DATA_HOME: string;
		P9K_TTY: string;
		XDG_CONFIG_HOME: string;
		npm_config_local_prefix: string;
		XMODIFIERS: string;
		ELECTRON_OZONE_PLATFORM_HINT: string;
		BUN_INSTALL_GLOBAL_DIR: string;
		NO_AT_BRIDGE: string;
		XCURSOR_SIZE: string;
		EDITOR: string;
		GOBIN: string;
		XDG_SEAT: string;
		PWD: string;
		LOGNAME: string;
		XDG_SESSION_TYPE: string;
		_: string;
		VSCODE_GIT_ASKPASS_NODE: string;
		MOTD_SHOWN: string;
		VSCODE_INJECTION: string;
		HOME: string;
		LANG: string;
		_JAVA_AWT_WM_NONREPARENTING: string;
		XDG_CURRENT_DESKTOP: string;
		CARGO_HOME: string;
		RUSTUP_TOOLCHAIN: string;
		npm_package_version: string;
		WAYLAND_DISPLAY: string;
		__MISE_DIFF: string;
		GIT_ASKPASS: string;
		GDK_DEBUG: string;
		GOROOT: string;
		CHROME_DESKTOP: string;
		__MISE_ORIG_PATH: string;
		XDG_CACHE_HOME: string;
		npm_lifecycle_script: string;
		VSCODE_GIT_ASKPASS_EXTRA_ARGS: string;
		SDL_IM_MODULE: string;
		TERM: string;
		npm_package_name: string;
		RUSTUP_HOME: string;
		ZDOTDIR: string;
		USER: string;
		SDL_VIDEODRIVER: string;
		VSCODE_GIT_IPC_HANDLE: string;
		__MISE_SESSION: string;
		DISPLAY: string;
		npm_lifecycle_event: string;
		SHLVL: string;
		MOZ_ENABLE_WAYLAND: string;
		QT_IM_MODULE: string;
		_P9K_SSH_TTY: string;
		XDG_VTNR: string;
		XDG_SESSION_ID: string;
		npm_config_user_agent: string;
		XDG_STATE_HOME: string;
		npm_execpath: string;
		BUN_INSTALL_BIN: string;
		XDG_RUNTIME_DIR: string;
		DEBUGINFOD_URLS: string;
		npm_package_json: string;
		P9K_SSH: string;
		VSCODE_GIT_ASKPASS_MAIN: string;
		MISE_SHELL: string;
		XDG_DATA_DIRS: string;
		GDK_BACKEND: string;
		BROWSER: string;
		PATH: string;
		ORIGINAL_XDG_CURRENT_DESKTOP: string;
		DBUS_SESSION_BUS_ADDRESS: string;
		WAYFIRE_CONFIG_FILE: string;
		MAIL: string;
		GIO_LAUNCHED_DESKTOP_FILE_PID: string;
		npm_node_execpath: string;
		GIO_LAUNCHED_DESKTOP_FILE: string;
		OLDPWD: string;
		TERM_PROGRAM: string;
		NODE_ENV: string;
		[key: `PUBLIC_${string}`]: undefined;
		[key: `${string}`]: string | undefined;
	}
}

/**
 * Similar to [`$env/dynamic/private`](https://svelte.dev/docs/kit/$env-dynamic-private), but only includes variables that begin with [`config.kit.env.publicPrefix`](https://svelte.dev/docs/kit/configuration#env) (which defaults to `PUBLIC_`), and can therefore safely be exposed to client-side code.
 * 
 * Note that public dynamic environment variables must all be sent from the server to the client, causing larger network requests — when possible, use `$env/static/public` instead.
 * 
 * ```ts
 * import { env } from '$env/dynamic/public';
 * console.log(env.PUBLIC_DEPLOYMENT_SPECIFIC_VARIABLE);
 * ```
 */
declare module '$env/dynamic/public' {
	export const env: {
		[key: `PUBLIC_${string}`]: string | undefined;
	}
}
