export const emulators = [
  {
    name: 'snes',
    config: `
      EJS_player = '#game';
      EJS_core = 'snes';
      EJS_mouse = false;
      EJS_multitap = false;
    `,
  },
  {
    name: 'genesis',
    config: `
      EJS_player = '#game';
      EJS_core = 'segaMD';
    `,
  },
];
