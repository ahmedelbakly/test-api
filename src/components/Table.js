import React from "react";
import axios from "axios";
const Table = ({ get2, setGet2, users }) => {
  return (
    <div>
      <table className="table">
        <tr>
          <th>#</th>
          <th>Name</th>
          <th>title</th>
          <th>Delete</th>
        </tr>
        {users.map((user, index) => (
          <tr key={user._id}>
            <td> {index + 1}</td>
            <td> {user.name}</td>
            <td> {user.title}</td>
            <td>
              <button
                className="btn-del"
                onClick={() => {
                  axios
                    .post("http://localhost:5000/delUser", { id: user._id })
                    .then((res) => console.log(res));
                  setGet2(!get2);
                }}
              >
                Del
              </button>
            </td>
          </tr>
        ))}
      </table>
    </div>
  );
};

export default Table;
