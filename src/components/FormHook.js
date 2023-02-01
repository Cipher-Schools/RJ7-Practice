import React, { useRef } from "react";

function FormHook() {
  const emailRef = useRef("");
  const passwordRef = useRef("");

  const handleLogin = (e) => {
    e.preventDefault();
    console.log(emailRef.current.value, passwordRef.current.value);
    alert(`Email: ${emailRef.current.value} and Password : ${passwordRef.current.value}`);
  };
  console.log("Hello form rendered");
  return (
    <div>
      <h1>Signin Form</h1>
      <form onSubmit={(e) => handleLogin(e)}>
        <label name="email">Email:</label>
        <input type="text" placeholder="Email Address" ref={emailRef} />
        <br />
        <br />
        <label name="password">Password:</label>
        <input type="text" placeholder="Password" ref={passwordRef} />
        <br />
        <br />
        <input type="submit" value="Login" />
      </form>
    </div>
  );
}

export default FormHook;
