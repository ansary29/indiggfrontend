import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Axios from "axios";

function Table() {
  const [list, setList] = useState([]);

  useEffect(() => {
    Axios.get("https://indigg-xew9.onrender.com/read").then((res) => {
      // console.log(res.data);
      setList(res.data);
    });
  }, []);

  const deleteFood = (id) => {
    Axios.delete(`https://indigg-xew9.onrender.com/delete/${id}`);
    setList([...list]);
    console.log(list);
  };
  return (
    <div>
      <Link to="/create">
        <button type="button" className="btn btn-primary">
          +Create
        </button>
      </Link>

      <table>
        <tr>
          <th>Name</th>
          <th>StartDate</th>
          <th>EndDate</th>
          <th>Status</th>
          <th>Action</th>
        </tr>
        {list.map((value, idx) => {
          return (
            <tr>
              <td>{value.name}</td>
              <td>{value.startDate}</td>
              <td>{value.EndDate}</td>
              <td>{value.Status}</td>
              <td>
                <Link to={`/view/${value._id}`}>
                  <button type="button" className="btn btn-primary">
                    View
                  </button>
                </Link>
                <Link to={`/edit/${value._id}`}>
                  <button type="button" className="btn btn-success">
                    Edit
                  </button>
                </Link>
                <button
                  type="button"
                  className="btn btn-danger"
                  onClick={() => deleteFood(value._id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          );
        })}
      </table>
    </div>
  );
}

export default Table;
