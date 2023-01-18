import React, { useState } from "react";

const Welcome = () => {
  const [user, setUser] = useState("Guest");

  const handleLogin = () => {
    setUser("Ajay");
  };

  return (
    <div>
      <h1>Welcome {user}</h1>
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};

export default Welcome;
