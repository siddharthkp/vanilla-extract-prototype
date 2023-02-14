var reactExports = {};
var react = {
  get exports(){ return reactExports; },
  set exports(v){ reactExports = v; },
};

export { react as __module, reactExports as exports };
