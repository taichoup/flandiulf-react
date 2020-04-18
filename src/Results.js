import React from "react";

export const Results = (props) => {
  return (
    <div id="table-wrapper">
      <table className="pure-table pure-table-horizontal">
        {props.crawl
          .filter(
            (item) =>
              item.sign === props.sign && item.category === props.category
          )
          .map((r) => (
            <tr>
              <td>{r.source}</td>
              <td>{r.timestamp}</td>
              <td>{r.content}</td>
            </tr>
          ))}
      </table>
    </div>
  );
};
