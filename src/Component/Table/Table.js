import React from "react";
import "./table.css";
import "./index.js";

function Table() {
  return (
    <div>
      <div className="container container2">
        <table className="table">
          <thead className="thead-dark">
            <tr>
              <th scope="col">No.</th>
              <th className="header" scope="col">
                Your List
              </th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody id="listData">
            {/* <!-- <tr> 
            <th scope="row">1</th> 
            <td>Mark</td>
            <td>Otto</td>
        </tr> --> */}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Table;
