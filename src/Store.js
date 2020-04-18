import { createStore } from "redux";

// const reducer = (state, action) => {
//   // no matter how I look at it, ain't I mutating the state?
//   const { type, payload } = action;
//   if (type === "CRAWL_RESULTS") {
//     state.crawl = payload;
//   } else if (type === "SIGN") {
//     state.sign = payload;
//   } else if (type === "CATEGORY") {
//     state.category = payload;
//   } else if (type === "TEST") {
//     state.test = payload;
//   }
//   return state;
// };

const reducer = (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case "CRAWL_RESULTS":
      return Object.assign({}, state, { crawl: payload });
    case "SIGN":
      return Object.assign({}, state, { sign: payload });
    case "CATEGORY":
      return Object.assign({}, state, { category: payload });
    case "TEST":
      return Object.assign({}, state, { test: payload });
    default:
      return state;
  }
};

export const _Store = createStore(reducer, {
  crawl: [],
  sign: "balance",
  category: "sante",
  test: "",
});

_Store.subscribe(() => {
  console.log(_Store.getState());
});
