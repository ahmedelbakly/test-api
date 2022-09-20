import "./App.css";
import { useState, useEffect } from "react";

import Table from "./components/Table";
import Form from "./components/Form";
function App() {
  const [users, setUsers] = useState([]);
  const [get, setGet] = useState(true);
  const [get2, setGet2] = useState(true);

  useEffect(() => {
    fetch("http://localhost:5000/getUser")
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }, [get, get2]);

  return (
    <div className="App">
      <h1>test api</h1>
      <Form get={get} setGet={setGet} />
      <Table get2={get2} setGet2={setGet2} users={users} />
    </div>
  );
}

export default App;
