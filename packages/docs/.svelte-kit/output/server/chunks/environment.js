const DEV = false;
let prerendering = false;
function set_building() {
}
function set_prerendering() {
  prerendering = true;
}
export {
  DEV as D,
  set_prerendering as a,
  prerendering as p,
  set_building as s
};
