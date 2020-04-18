import { createStore } from "redux";

const reducer = (state, action) => {
  const { type, payload } = action;
  if (type === "CRAWL_RESULTS") {
    console.log("Receiving a crawl result!");
    state.crawl = payload;
    console.log(state.crawl);
  }
  return state;
};

export const _Store = createStore(reducer, { crawl: [] });
