import React from "react";

function Table(props) {
  console.log(props);
  return (
    <div>
      <table className="table">
      <tr>
      <th scope="col">Pic</th>
      <th scope="col">First</th>
      <th scope="col">Last</th>
      <th scope="col">Email</th>
      <th scope="col">Phone</th>

    </tr>
        <tbody>
          {props.results.map((results) => (
            <tr>
              <td>
                {" "}
                <img src={results.picture.thumbnail} />
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
