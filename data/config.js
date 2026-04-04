const PRODUCTION_MODE = true;
const appdb = {
  config: {
    subject: "",
    class: "Class 5",
    id: "riz_569",
    totalPages: 80,
    bookWidth: 1259,
    bookHeight: 1646,
    prePages: [
      // { pageUrl: "cover.jpg", pageName: "Cover" },
      // { pageUrl: "blank.jpg", pageName: "Blank" },
      // { pageUrl: "blank.jpg", pageName: "Blank" },
      // { pageUrl: "EVS-V_4_page-0004.jpg", pageName: "Blank" },
    ],
  },

  ebook: {
    toc: {
      icon: "fa-book",
      menu: "Table of Contents",
      link: "content",
      data: [
        // {
        //   page: 2,
        //   title: "1. Living together",
        // },
      ],
    },
    // Animations: {
    //   icon: "fa-video-camera",
    //   menu: "Animations",
    //   link: "video",
    //   data: [
    //     {
    //       path: "resources/animations/ch_1_1.mp4",
    //       title: "Family and Friends",
    //       size: "850x480",
    //       page: 3,
    //       chapter: "Chapter 1",
    //     },
    //   ],
    // },
    // "Interactivities.": {
    //   icon: "fa-users",
    //   menu: "Activities",
    //   link: "iframe",
    //   data: [
    //     {
    //       path: "resources/interactivities/fib/chap_1_q_5.html",
    //       title: "Chapter 1, Activity A",
    //       size: "1024x700",
    //       page: 6,
    //     },
    //   ],
    // },
    // "Games.": {
    //   icon: "fa-users",
    //   menu: "Games",
    //   link: "iframe",
    //   data: [
    // {
    //   path: "",
    //   title: "Coming Soon",
    //   size: "1024x800",
    //   page: "",
    // },
    // {
    //   path: "resources/interactivities/fib/chap_2_fib_1.html",
    //   title: "Chapter 1, Activity A",
    //   size: "1100x900",
    //   page: 22,
    // },
    //   ],
    // },
    // "Test Paper Generator.": {
    //   icon: "fa-users",
    //   menu: "Test Paper Generator",
    //   link: "iframe",
    //   data: [
    // {
    //   path: "",
    //   title: "Coming Soon",
    //   size: "1024x800",
    //   page: "",
    // },
    // {
    //   path: "resources/interactivities/fib/chap_2_fib_1.html",
    //   title: "Chapter 1, Activity A",
    //   size: "1100x900",
    //   page: 22,
    // },
    //   ],
    // },

    zother: [],
  },
};

var TOOLS_OPTIONS = {
  sidebar: {
    activate: true,
    id: "tool-sidebar",
  },
  notes: {
    activate: true,
    id: "ebook-addnote",
  },
  zoomin: {
    activate: true,
    id: "tool-zoom-in",
  },
  zoomout: {
    activate: true,
    id: "tool-zoom-out",
  },
  mode: {
    activate: true,
    id: "tool-bookmode-single-double",
  },
  fullscreen: {
    activate: true,
    id: "tool-fullscreen",
  },
  assetmode: {
    activate: true,
    id: "app-btn-toggleres",
  },
  spotlight: {
    activate: true,
    id: "app-btn-spotlight",
  },
  backgroundmusic: {
    activate: true,
    id: "tool-backgroundmusic",
  },
  pen: {
    activate: true,
    id: "app-tool-pen",
  },
  highlighter: {
    activate: true,
    id: "app-tool-highlight",
  },
  thumbnail: {
    activate: true,
    id: "app-tool-thumbnail",
  },
  glossary: {
    activate: false,
    id: "app-btn-glossary",
  },
  bookmarkslist: {
    activate: true,
    id: "app-list-bookmark",
  },
  highlightsList: {
    activate: true,
    id: "app-list-highlights",
  },
  notesList: {
    activate: true,
    id: "app-list-notes",
  },
};
