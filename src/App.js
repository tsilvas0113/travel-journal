import React from "react";
import Navbar from "./components/Navbar";
import Main from "./components/Main";
import data from "./data";

function App() {
  const items = data.map(item => {
    return <Main 
      key = {item.id}
      {...item}
    />
  })
  return (
    <div className="App">
      <Navbar />
      {items}
    </div>
  );
}

export default App;