import React from "react";
import { Button } from "../components/Buttons/Buttons";

const Home = () => {
  return (
    <div className="section text-center">
      <h1 className="heading heading--is-light">Welcome!</h1>
      <p className="paragraph paragraph--is-light">Welcome to the Home page!</p>
      <Button to="/details" style="primary" center={true}>Begin</Button>
      
    </div>
  );
};

export default Home;