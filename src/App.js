import React from "react";
import "./App.css";
import New from "./Component/New";
import { Button } from "react-materialize";

function App() {
  return (
    <div className="App">
      <h1>landingPage news </h1>

      <New></New>

      <Button>button</Button>
    </div>
  );
}

export default App;
