import React from "react";

function Table(props) {
    console.log (props)
  return (
    <div>
      <table className="table">
        {props.results.map(results => 
            <tr>
            <th scope="col"> <img src={results.picture.thumbnail} /></th>
            <th scope="col">{results.name.first} </th>
            <th scope="col">{results.name.last} </th>
            <th scope="col">{results.email} </th>
            <th scope="col">{results.phone} </th>
          </tr>
        )}
      </table>
    </div>
  );
}

export default Table;
