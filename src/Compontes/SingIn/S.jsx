import React, { useState } from "react";

function S() {
  const [Fname, setFname] = useState("");
  const [Lname, setLname] = useState("");
  const [Email, setEmail] = useState("");
  const data = [Fname, Lname, Email];
  const handalSubmmit = (e) => {
    e.preventDefault();
    console.log(data.toString());
  };
  return (
    <div>
      <form onSubmit={handalSubmmit}>
        <input
          type="text"
          placeholder="Enter the First Name"
          value={Fname}
          onChange={(e) => {
            setFname(e.target.value);
          }}
        />
        <input
          type="text"
          placeholder="Enter the last Name"
          value={Lname}
          onChange={(e) => {
            setLname(e.target.value);
          }}
        />
        <input
          type="text"
          placeholder="Enter the Email "
          value={Email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
        <button>click to submmit</button>
      </form>
    </div>
  );
}

export default S;
