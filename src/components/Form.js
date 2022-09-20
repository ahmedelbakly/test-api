import React from "react";
import { useState } from "react";
import axios from "axios";
const Form = ({ get, setGet }) => {
  const [userInfo, setUserInfo] = useState({
    name: "",
    title: "",
  });
  const handleChange = (e) => {
    setUserInfo((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(userInfo);
    axios
      .post("http://localhost:5000/addUser", userInfo)
      .then((response) => console.table(response.data, response.status));
    setGet(!get);
  };

  return (
    <div>
      <div className="form-con">
        <form onSubmit={handleSubmit}>
          <h2>New User</h2>
          <input
            type="text"
            name="name"
            value={userInfo.name}
            onChange={handleChange}
          />
          <input
            type="text"
            name="title"
            value={userInfo.title}
            onChange={handleChange}
          />
          <button type="submit" className="">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Form;
