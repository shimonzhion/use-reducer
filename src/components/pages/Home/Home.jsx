import "./Home.css";
import React from "react";
import NumberInput from "../../fetchers/Number-Input.jsx"
import Counter from "../Counter/Counter";



function Home() {
  return (
    <div className="home">
      <h1>Home</h1>
      <Counter />
      <NumberInput />
    </div>
  );
}

export default Home;
