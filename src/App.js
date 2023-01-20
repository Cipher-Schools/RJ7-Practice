//Functional Component

// import React from "react";

// function App() {
//   return <h1>Hello Abhinav</h1>;
// }

// export default App;

// Class Component

import React from "react";
import "./App.css";
import Greet from "./components/Greet";
import Message from "./components/Message";
import Welcome from "./components/Welcome";
import Counter from "./components/Counter";
import Counter2 from "./components/Counter2";
import Alert from "./components/Alert";
import Parent from "./components/Parent";
import Lists from "./components/Lists";
import Forms from "./components/Forms";
import ComponentA from "./components/ComponentA";
import Home from "./components/Home";
import LifecycleA from "./components/LifecycleA";
import Clock from "./components/Clock";

// import "./components/Forms.css";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        {/* <Clock /> */}
        <LifecycleA />
        {/* <Home /> */}
        {/* <ComponentA /> */}
        {/* <Forms /> */}
        {/* <Lists /> */}
        {/* <Parent /> */}
        {/* <Alert /> */}
        {/* <Counter2 /> */}
        {/* <Counter /> */}
        {/* <Welcome /> */}
        {/* <Message /> */}
        {/* <Greet name="Abhinav" secondName="Kumar">
          <button>Hello</button>
        </Greet>
        <Greet name="Ajay">
          <h4>What's up!!!</h4>
        </Greet>
        <Greet name="Sashi" /> */}
      </div>
    );
  }
}

export default App;

// App Component Without JSX

// import React from "react";

// export const App = () => {
//   return React.createElement(
//     "div",
//     { id: "container" },
//     React.createElement("h1", null, "Hello Viven")
//   );
// };

// export const Greet = () => {
//   return <App />;
// };

// export default App;
