import React from "react";
import { Button } from "../components/Buttons/Buttons";

const Home = () => {
  return (
    <div className="section text-center">
      <h1 className="heading heading--large heading--is-light">Policy Signup</h1>
      <p className="paragraph paragraph--large paragraph--is-light">Get the best coverage with our different policy plans and features.</p>
      <Button to="/details" style="primary" center={true}>Begin</Button>
      
    </div>
  );
};

export default Home;