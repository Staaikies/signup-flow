import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import { Button } from "../components/Buttons/Buttons";

const Home = () => {
  return (
    <div className="section text-center">
      <h1 className="heading heading--is-light">Welcome!</h1>
      <p className="paragraph paragraph--is-light">Welcome to the Home page!</p>
      <Link to="/details">
        <Button style="primary">Begin</Button>
      </Link>
      
    </div>
  );
};

export default Home;