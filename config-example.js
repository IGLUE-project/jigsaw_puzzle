//Copy this file to config.js and specify your own settings

export let ESCAPP_APP_SETTINGS = {
  //Settings that can be specified by the authors
  skin: "FRAMED", //skin can be "STANDARD" or "FRAMED".
  //backgroundImg: "NONE", //background can be "NONE" or a URL.
  actionAfterSolve: "SHOW_MESSAGE", //actionAfterSolve can be "NONE" or "SHOW_MESSAGE".
  //message: "Custom message",
  imageSol: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2d/Laguna_69.png/960px-Laguna_69.png",
  imageSolReverse: "https://upload.wikimedia.org/wikipedia/commons/3/3d/A_Landscape_with_Travellers_and_Cattle_Crossing_a_Bridge_by_a_Waterfall_.PNG",
  imageDistractor: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/80/Pajara_%28Fuerteventura%2C_Spain%29%2C_Mirador_Astron%C3%B3mico_de_Sicasumbre%2C_Ausblick_--_2025_--_7140.jpg/1280px-Pajara_%28Fuerteventura%2C_Spain%29%2C_Mirador_Astron%C3%B3mico_de_Sicasumbre%2C_Ausblick_--_2025_--_7140.jpg",
  imageDistractorReverse: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8a/WAK_Probsteizella_05.jpg/1280px-WAK_Probsteizella_05.jpg",
  rows: 3,
  cols: 4,

  //Settings that will be automatically specified by the Escapp server
  locale: "es",

  escappClientSettings: {
    endpoint: "https://escapp.es/api/escapeRooms/id",
    linkedPuzzleIds: [1],
    rtc: false,
  },
};