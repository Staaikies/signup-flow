import React from "react";
import { Button } from "../components/Buttons/Buttons";

const Done = () => {
  return (
    <div className="section text-center">
      <h1 className="heading heading--large heading--is-light">Thank you!</h1>
      <p className="paragraph paragraph--large paragraph--is-light">We will contact you via email with your subscription and payment details.</p>
        <Button to="/" style="secondary" center={true}>Back to home</Button>
    </div>
  );
};

export default Done;