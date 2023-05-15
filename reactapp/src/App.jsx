/* eslint-disable react/prop-types */
import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import React from "react";
function App() {
  // const [count, setCount] = React.useState(0);

  return (
    <>
      <Person name="John" age="30" city="Kansas" />
      <Person name="Jane" age="20" city="Bali" />
    </>
  );
}

const Person = ({ name, age, city }) => {
  return (
    <div>
      <h1> {name}</h1>
      <h2> {age}</h2>
      <h3> {city}</h3>
    </div>
  );
};

export default App;
