import "./App.css";

import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Table from "./Table";
import CreateForm from "./CreateForm";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import EditForm from "./EditForm";
import ViewForm from "./ViewForm";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <h2>List Of Tournament</h2>
        <Routes>
          <Route path="/" element={<Table />} />
          <Route path="/create" element={<CreateForm />} />
          <Route path="/edit/:id" element={<EditForm />} />
          <Route path="/view/:id" element={<ViewForm />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
