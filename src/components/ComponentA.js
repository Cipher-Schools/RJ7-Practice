import React, { useState } from "react";

import "./Forms.module.css";
import styled from "./Forms.module.css";

//INLINE STYLING
// const conatiner = {
//   display: "flex",
//   width: "100%",
//   height: "100vh",
//   alignItems: "center",
//   flexDirection: "column",
//   justifyContent: "center",
// };

// Apply: style={conatiner}

function ComponentA() {
  const [details, setDetails] = useState({
    firstName: "",
    lastName: "",
    college: "",
    mobileNo: "",
  });

  console.log({ details });

  const { firstName, lastName, college, mobileNo } = details;
  return (
    <form className={styled.container}>
      <label name="firstName">First Name:</label>
      <input
        type="text"
        value={firstName}
        placeholder="First Name"
        onChange={(e) =>
          setDetails((prevState) => {
            console.log({ prevState });
            return { ...prevState, firstName: e.target.value };
          })
        }
      />
      <br />
      <br />
      <label name="lastName">Last Name:</label>
      <input
        type="text"
        value={lastName}
        placeholder="Last Name"
        onChange={(e) =>
          setDetails((prevState) => {
            console.log({ prevState });
            return { ...prevState, lastName: e.target.value };
          })
        }
      />
      <br />
      <br />
      <label name="college">College Name:</label>
      <input
        type="text"
        value={college}
        placeholder="College Name"
        onChange={(e) => setDetails((prevState) => ({ ...prevState, college: e.target.value }))}
      />
      <br />
      <br />
      <label name="mobileNo">Mobile No:</label>
      <input
        type="text"
        value={mobileNo}
        placeholder="Mobile No"
        onChange={(e) => setDetails((prevState) => ({ ...prevState, mobileNo: e.target.value }))}
      />
      <br />
      <br />
      <input type="submit" value="Submit" />
    </form>
  );
}

export default ComponentA;
