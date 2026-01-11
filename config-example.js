//Copy this file to config.js and specify your own settings

export let ESCAPP_APP_SETTINGS = {
  //Settings that can be specified by the authors
  //backgroundImg: "", //background can be "NONE" or a URL.
  image1:"https://upload.wikimedia.org/wikipedia/commons/thumb/2/2d/Laguna_69.png/960px-Laguna_69.png",
  image2:"https://upload.wikimedia.org/wikipedia/commons/3/3d/A_Landscape_with_Travellers_and_Cattle_Crossing_a_Bridge_by_a_Waterfall_.PNG",
  rows: 3,
  cols: 3,

  //Settings that will be automatically specified by the Escapp server
  locale: "es",

  escappClientSettings: {
    endpoint: "https://escapp.es/api/escapeRooms/id",
    linkedPuzzleIds: [1],
    rtc: false,
  },
};