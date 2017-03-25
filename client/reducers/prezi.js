'use strict';

const initPrezi = [
  {
    id: "56f137f432fbb67217182785",
    title: "incididunt amet ad nostrud",
    thumbnail: "https://placeimg.com/400/400/any",
    creator: {
      name: "consectetur laborum",
      profileUrl: "http://randomprofile.prezi.com/"
    },
    createdAt: "March 6, 2014"
  },
];

const prezi = (state = initPrezi, action) => {
  switch (action.type) {
    case 'PREZI_LOADED':
      return Object.keys(action.prezi).reduce((prev, key) => prev.concat(action.prezi[key]), []);
    default:
      return state;
  }
};


export default prezi;
