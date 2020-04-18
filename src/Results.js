import React from "react";
import { useEffect } from "react";
import { _Store } from "./Store";
import StoreContext from "./StoreContext";
import axios from "axios";

export const Results = (sign, category) => {
  useEffect(() => {
    async function fetchData() {
      const res = await axios.get("../static/astrodump.json");
      const db = res.data;
      _Store.dispatch({ type: "CRAWL_RESULTS", payload: db });
    }
    fetchData();
  }, []);

  //   const sendForm = () => {
  //     let sign = document.getElementById("select_sign").nodeValue;
  //     let category = document.getElementById("select_cat").nodeValue;
  //   };

  //   const resetTable = () => {
  //     document.getElementById("results-table").remove();
  //     document.getElementsByClassName("wordcloud")[0].remove();
  //   };

  return (
    <StoreContext.Consumer>
      {(store) => (
        <div id="table-wrapper">
          <table>
            {_Store.getState().crawl.map((r) =>
              (
                <tr>
                  <td>r.source</td>
                  <td>r.timestamp</td>
                  <td>r.content</td>
                </tr>
              ).filter((r) => r)
            )}
            {/* {_Store.getState().crawl} */}
          </table>
        </div>
      )}
    </StoreContext.Consumer>
  );
};
