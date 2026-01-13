export const DEFAULT_APP_SETTINGS = {
  skin: "STANDARD",
  backgroundImg: undefined,
  frameImg: undefined,
  framePaddingTop: 0,
  framePaddingBottom: 0,
  framePaddingLeft: 0,
  framePaddingRight: 0,
  rows: 3,
  cols: 4,
  delay: 2000,
  winAudio: "sounds/win.wav",
};

export const ESCAPP_CLIENT_SETTINGS = {
  imagesPath: "./images/",
};

export const THEMES = {
  STANDARD: "STANDARD",
  FRAMED: "FRAMED",
};

export const THEME_ASSETS = {
  [THEMES.STANDARD]: {
  },
  [THEMES.FRAMED]: {
    backgroundImg: "/images/framed_background.png",
    frameImg: "/images/framed_frame.png",
    framePaddingTop: 25,
    framePaddingBottom: 23,
    framePaddingLeft: 25,
    framePaddingRight: 27,
  },
};