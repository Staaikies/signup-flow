import React from "react";
import { Link } from "react-router-dom";
import { Button } from "../components/Buttons/Buttons";

const Done = () => {
  return (
    <div className="section text-center">
      <h1 className="heading heading--is-light">Thank you!</h1>
      <p className="paragraph paragraph--is-light">We will contact you via email with your subscription and payment details</p>
      <Link to="/">
        <Button style="secondary">Back to home</Button>
      </Link>
      
    </div>
  );
};

export default Done;