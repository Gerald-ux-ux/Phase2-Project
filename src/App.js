import React from "react";
import Nav from "./Nav";
import Fetch from "./Fetch";
import Search from "./Search";
import "./App.css";

const App = () => {
  return (
    <>
      <div className="App">
        {/* <Search /> */}
        <Fetch />
        <Nav />
      </div>

      <div className="Nav"></div>
    </>
  );
};

export default App;
