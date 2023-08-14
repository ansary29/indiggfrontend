import React, { useState, useEffect } from "react";
import "./App.css";

import { useNavigate, useParams } from "react-router-dom";
import Axios from "axios";

function EditForm() {
  const navigate = useNavigate();
  const params = useParams();
  const [list, setList] = useState([]);
  const [names, setName] = useState("");
  const [sta, setsta] = useState("");

  useEffect(() => {
    Axios.get(`https://indigg-xew9.onrender.com/read/${params.id}`).then((res) => {
      console.log(res.data);
      setList(res.data);
    });
  });

  const updateList = (id) => {
    Axios.put(`http://localhost:3001/update`, {
      id: id,

      name: names,
      Status: sta,
    });
    navigate("/");
    console.log(names, sta);
  };
  return (
    <div>
      <form>
        <div className="mb-3">
          <label className="form-label">Name</label>
          <input
            type="text"
            className="form-control"
            aria-describedby="emailHelp"
            onChange={(e) => setName(e.target.value)}
            placeholder={list.name}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">StartDate</label>
          <input
            // type="date"
            className="form-control"
            aria-describedby="emailHelp"
            placeholder={list.startDate}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">End Date</label>
          <input
            // type="date"
            className="form-control"
            aria-describedby="emailHelp"
            placeholder={list.EndDate}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Status</label>
          <input
            type="text"
            className="form-control"
            aria-describedby="emailHelp"
            onChange={(e) => setsta(e.target.value)}
            placeholder={list.Status}
          />
        </div>

        <button
          type="submit"
          className="btn btn-primary"
          onClick={() => updateList(params.id)}
        >
          Update
        </button>
      </form>
    </div>
  );
}

export default EditForm;
