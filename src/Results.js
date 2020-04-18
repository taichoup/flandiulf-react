import React from "react";
import StoreContext from "./StoreContext";
import { _Store } from "./Store";

export const Results = (props) => {
  const sgn = _Store.getState().sign;
  const cat = _Store.getState().category;
  const cwl = _Store.getState().crawl;

  return (
    <StoreContext.Consumer>
      {(store) => (
        <div id="table-wrapper">
          <table className="pure-table pure-table-horizontal">
            {cwl
              .filter((item) => item.sign === sgn && item.category === cat)
              .map((r) => (
                <tr>
                  <td>{r.source}</td>
                  <td>{r.category}</td>
                  <td>{r.sign}</td>
                  <td>{r.timestamp}</td>
                  <td>r.content</td>
                </tr>
              ))}
          </table>

          {/* <table className="pure-table pure-table-horizontal">
            {props.crawl.filter(
              (item) =>
                item.sign === props.sign && item.category === props.category
            )}
            .map((r) => (
            <tr>
              <td>r.source</td>
              <td>r.timestamp</td>
              <td>r.content</td>
            </tr>
            ))
          </table> */}
        </div>
      )}
    </StoreContext.Consumer>
  );
};
