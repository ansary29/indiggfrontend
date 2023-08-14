import React, { useState } from "react";
import "./App.css";

import { useNavigate } from "react-router-dom";
import Axios from "axios";

function CreateForm() {
  const navigate = useNavigate();
  const [names, setName] = useState("");
  const [startDate, setStardate] = useState("");
  const [endDate, setEnddate] = useState("");
  const [sta, setsta] = useState("");

  const addToList = () => {
    Axios.post("https://indigg-xew9.onrender.com/insert", {
      name: names,
      Status: sta,
      startDate: startDate,
      EndDate: endDate,
    });
    navigate("/");
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
          />
        </div>
        <div className="mb-3">
          <label className="form-label">StartDate</label>
          <input
            type="date"
            className="form-control"
            aria-describedby="emailHelp"
            onChange={(e) => setStardate(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">End Date</label>
          <input
            type="date"
            className="form-control"
            aria-describedby="emailHelp"
            onChange={(e) => setEnddate(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Status</label>
          <input
            type="text"
            className="form-control"
            aria-describedby="emailHelp"
            onChange={(e) => setsta(e.target.value)}
          />
        </div>

        <button type="submit" className="btn btn-primary" onClick={addToList}>
          Submit
        </button>
      </form>
    </div>
  );
}

export default CreateForm;
