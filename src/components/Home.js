import React, { useState } from "react";
import Logout from "./Logout";
import Login from "./Login";

function Home() {
  const [isLogin, setIsLogin] = useState(true);

  //   const userType = () => {
  //     if (isLogin) return "User";
  //     return "Guest";
  //   };

  //   const ButtonType = () => {
  //     if (isLogin) return <Logout />;
  //     else return <Login />;
  //   };
  return (
    <div>
      <h1>Home Screen</h1>
      {/* <h2>Hello {userType()}</h2> */}
      <h2>Hello {isLogin ? "User" : "Guest"}</h2>
      {/* {ButtonType()} */}
      {isLogin ? <Logout /> : <Login />}
    </div>
  );
}

export default Home;
