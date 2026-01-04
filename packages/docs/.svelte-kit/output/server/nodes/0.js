import * as universal from '../entries/pages/_layout.ts.js';

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/+layout.ts";
export const imports = ["_app/immutable/nodes/0.CJ9D1as9.js","_app/immutable/chunks/DT3QW2lX.js","_app/immutable/chunks/CcB7mu8M.js","_app/immutable/chunks/DCsR-pzs.js","_app/immutable/chunks/Ch78oinL.js"];
export const stylesheets = ["_app/immutable/assets/0.D-_Jk5PE.css"];
export const fonts = [];
