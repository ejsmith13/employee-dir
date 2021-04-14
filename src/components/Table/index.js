import React from "react";

function Table(props) {
  // props.results.name.sort();
  
  
  return (
    <div>
      <table className="table">
        <thead>
        <tr>
          <th scope="col"></th>
          <th scope="col">First Name</th>
          <th scope="col">Last Name</th>
          <th scope="col">Email</th>
          <th scope="col">Phone</th>
        </tr>
        </thead>
        
        <tbody>
          {props.results.map((results) => (
            <tr key= {results.phone}>
              <td>
                {" "}
                <img src={results.picture.thumbnail} alt="" />
              </td>
              <td>{results.name.first} </td>
              <td>{results.name.last} </td>
              <td>{results.email} </td>
              <td>{results.phone} </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Table;
